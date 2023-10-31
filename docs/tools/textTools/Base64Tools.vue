<script setup>
import {ref} from 'vue';
import { Notification } from '@arco-design/web-vue';

const inputText = ref('');
const outputText = ref('');

const encodeText = () => {
    try {
        outputText.value = btoa(encodeURIComponent(inputText.value));
    } catch(e) {
        outputText.value = '编码异常，请检查输入值';
    }
};

const decodeText = () => {
    try {
        outputText.value = decodeURIComponent(atob(inputText.value));
    } catch(e) {
        outputText.value = '解码异常，请检查输入值';
    }
};

const clearText = () => {
    inputText.value = '';
    outputText.value = '';
};

const toInput = () => {
    inputText.value = outputText.value;
    outputText.value = '';
};

const copyOutput = () => {
    let copyRight = false;
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(outputText.value).then(() => {
            Notification.success('内容已复制到剪贴板');
        }).catch(() => {
            Notification.success('复制失败，建议使用最新版 Chrome 浏览器');
        })
    } else {
        Notification.success('复制失败，建议使用最新版 Chrome 浏览器');
    }
};
</script>

<template>
    <div class="container">
        <p class="title">base64 编解码</p>
        <a-space class="btn-space">
            <a-button type="primary" status="success" @click="encodeText">
                <template #icon>
                    <icon-lock />
                </template>
                <template #default>编码</template>
            </a-button>
            
            <a-button type="primary" status="success" @click="decodeText">
                <template #icon>
                    <icon-unlock />
                </template>
                <template #default>解码</template>
            </a-button>
            <a-button type="primary" status="danger" @click="clearText">
                <template #icon>
                    <icon-delete />
                </template>
                <template #default>清空</template>
            </a-button>
        </a-space>
        <a-textarea 
            placeholder="输入编解码的内容" 
            :auto-size="{minRows: 3}"
            v-model="inputText"
        />
        <a-space class="btn-space">
            <a-button type="primary" status="success" @click="copyOutput">
                <template #icon>
                    <icon-copy />
                </template>
                <template #default>复制</template>
            </a-button>
            <a-button type="primary" status="warning" @click="toInput">
                <template #icon>
                    <icon-to-top />
                </template>
                <template #default>替换为输入值</template>    
            </a-button>
        </a-space>
        <div class="output-container">
            <span v-if="outputText">{{ outputText }}</span>
            <spna v-else style="color: #999">展示输出结果</spna>
        </div>
    </div>
</template>

<style scoped>
.container {
    margin: 2rem;
    padding: 1rem;
    border: 1px solid #e5e6eb;
    border-radius: 1rem;
}
.title {
    font-size: 24px;
    font-weight: bold;
    margin: 0 1rem .2rem 0;
}
.btn-space {
    margin-bottom: .5rem;
    margin-top: 1rem;
}
.output-container {
    border: 1px solid #e5e6eb;
    min-height: 4rem;
    cursor: text;
    padding: 4px 12px;
}
</style>