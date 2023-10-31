<!-- 使用 codemirror 6 与 vue-codemirror 实现 （https://github.com/surmon-china/vue-codemirror） -->
<!-- 使用 jsdiff 进行内容比较 （https://github.com/kpdecker/jsdiff） -->
<template>
    <div style="margin-left:.5rem">
        <a-typography-title :heading="2">
            文本比对工具
        </a-typography-title>

        <a-row style="margin-bottom: 1rem;" justify="start" :gutter="24">
            <a-col flex="300px">
                <a-typography-text>比较的类型 </a-typography-text>
                <a-select v-model="diffType" :style="{ width: '200px' }">
                    <a-option v-for="item in diffOptions" :value="item.value" :label="item.label" />
                </a-select>
            </a-col>
            <a-col flex="auto">
            </a-col>
        </a-row>
        
        <div class="container">
            <codemirror
                v-model="code" 
                placeholder="输入文本内容..." 
                :style="{ height: '400px' }" 
                :autofocus="true"
                :indent-with-tab="true" 
                :tab-size="2"
                :extensions="extensions"
                @ready="handleReady" 
                @change="textChange"
            />
        </div>
        <div class="container">
            <codemirror
                v-model="code2" 
                placeholder="输入文本内容..." 
                :style="{ height: '400px' }" 
                :autofocus="true"
                :indent-with-tab="true"
                :tab-size="2" 
                :extensions="extensions" 
                @ready="handleReady2" 
                @change="textChange" 
            />
        </div>
    </div>
</template>

<script setup>
import { ref, shallowRef, nextTick, watch } from 'vue';
import pkg from 'vue-codemirror/dist/vue-codemirror.cjs.js';
const { Codemirror } = pkg;
import { StateField, StateEffect } from "@codemirror/state";
import { EditorView, Decoration } from "@codemirror/view";
import { highlightSelectionMatches } from '@codemirror/search';
import { diffChars, diffWords, diffLines, diffCss, diffJson, diffArrays } from 'diff';

const code = ref(``);
const code2 = ref(``);

const view = shallowRef();
const view2 = shallowRef();

const diffType = ref(1);
const diffMethodMap = {
    1: diffChars,
    2: diffWords,
    3: diffLines,
    4: diffCss,
    5: diffJson,
    6: diffArrays
}
const diffOptions = [
    { value:1, label: '字符'},
    { value:2, label: '文本块'},
    { value:3, label: '行'},
    { value:4, label: 'CSS'}
    // { value:5, label: 'JSON'}
    // { value:6, label: '数组'}
]

watch(diffType, () => {
    textChange();
});

function debounce(fn, wait) {
    let time;

    return function (...args) {
        let context = this;
        clearTimeout(time);

        time = setTimeout(() => {
            fn.apply(context, args);
        }, wait);
    }
}

const handleReady = (payload) => {
    view.value = payload.view;
    view.value.dispatch({
        state: EditorView.lineWrapping.facet.of(true)
    })
}
const handleReady2 = (payload) => {
    view2.value = payload.view;
}

// 文本标记，参考实现（https://codemirror.net/docs/migration/）
const addMarks = StateEffect.define();
const filterMarks = StateEffect.define();

const markField = StateField.define({
    create() {
        return Decoration.none;
    },
    update(value, tr) {
        value = value.map(tr.changes);
        for (let effect of tr.effects) {
            if (effect.is(addMarks)) {
                value = value.update({add: effect.value, sort: true});
            } else if (effect.is(filterMarks)) {
                value = value.update({filter: effect.value});
            }
        }
        return value;
    },
    provide: f => EditorView.decorations.from(f)
})

// 扩展使用，参考文档（https://codemirror.net/docs/ref/#search.highlightSelectionMatches）

let selectTheme = EditorView.theme({
    ".cm-selectionBackground": {
        background: "rgba(150, 150, 150, 0.4) !important",
    },
    ".cm-selectionLayer": {
        zIndex: "0 !important"
    }
});
const extensions = [markField, EditorView.lineWrapping, highlightSelectionMatches({ maxMatches:0 }), selectTheme];

const addStyleMark = Decoration.mark({
    attributes: {style: 'background-color: #abf2bc;color: green;'}
});
const delStyleMark = Decoration.mark({
    attributes: { style: 'text-decoration: line-through;color: red;background-color: #ffe9e9;' }
})

const textChange = debounce(async () => {
    // 清除所有变更标记
    clearMark();

    await nextTick();

    // 将文案进行对比
    const [rangeArr1, rangeArr2] = diffText();

    // 将变更体现在扩展里
    updateMark(rangeArr1, rangeArr2);
}, 600);

const diffText = () => {
    const rangeArr1 = [], rangeArr2 = [];
    let bgIndex = 0, bgIndex2 = 0;

    const diffMethod = diffMethodMap[diffType.value];

    if ([5,6].includes(diffType.value)) {
        try {
            const diffArr = diffMethod(code.value && JSON.parse(code.value) || '', code2.value && JSON.parse(code2.value) || '');
            console.log({diffArr});
        } catch(e) {
            // 异常处理
            console.log('>>>>>>>>> 异常：', e);
        }

    } else {
        const diffArr = diffMethod(code.value, code2.value);
        diffArr.map((item) => {
            if (item.removed) {
                rangeArr1.push(delStyleMark.range(bgIndex, bgIndex+=item.value.length));
            } else if (item.added) {
                rangeArr2.push(addStyleMark.range(bgIndex2, bgIndex2+=item.value.length))
            } else {
                bgIndex += item.value.length;
                bgIndex2 += item.value.length;
            }
        })
    }


    return [rangeArr1, rangeArr2];
}

const clearMark = () => {
    const obj = {
        effects: filterMarks.of((from, to) => {
            return false;
        })
    };
    view.value.dispatch(obj);
    view2.value.dispatch(obj);
}

const updateMark = (rangeArr1, rangeArr2) => {
    view.value.dispatch({
        effects: addMarks.of(rangeArr1)
    });
    view2.value.dispatch({
        effects: addMarks.of(rangeArr2)
    })
}

</script>

<style scoped>
.container {
    display: inline-block;
    width:50%;
    min-width: 400px;
    border: 1px solid #ccc;
}

@media (max-width: 1100px) {
    .container {
        width: 100%;
    }
}
</style>