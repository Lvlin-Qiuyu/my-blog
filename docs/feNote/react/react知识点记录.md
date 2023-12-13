# React 知识点记录



通过 react react-dom，在页面定义一个 id 项，使用 createRoot 方法进行局部渲染。
 该方式可以渐进式地使用 react。

 eslint 插件：eslint-config-react-app，eslint-config-prettier
 [react 相关的 vscode 插件](https://react.docschina.org/learn/editor-setup)
 vue 用 volar 格式化，react 用 prettier 格式化，再安装一个Formatting Toggle，用于开启和关闭 prettier。

 https://react.docschina.org/learn/typescript dom-to-image  

 https://juejin.cn/post/7205753233599578170 vscode 插件配置，字体用什么，三等号的这个很舒服  


 今天了解了 prettier 是一个用来自动格式化代码的工具，但是跟 eslint 不一样，eslint 是用于检查的工具。为什么 eslint 不包括自动格式化的内容呢。

 Prettier ESLint 这个插件好像解决了👆这个问题，实际好像没有。
 .editorconfig 是一个很不错的配置文件，统一很多东西，在这里配置单引号。

 vsc-nvm 插件，通过配置 .nvmrc 文件，打开项目自动使用 nvm 进行 node 版本的切换。

 解决 eslint 与 prettier 冲突的办法：https://juejin.cn/post/7012160233061482532

 搞一个代码格式化和质量检查的终极配置版本，包括提交。

---

 react 跟 react-dom 是什么关系？
 配置 react 的 ts：
 npm install @types/react @types/react-dom

---

```react
 <label>
     <input type="checkbox" value={inStockOnly} onChange={(e)=>onInStockOnlyChange(e.target.value)} />
     {' '}
     Only show products in stock
   </label>
```

多个空格的写法。

---

react 能够通过 useContext，实现 vue 中 provider 相关的技术，进行组件树的数据传递。
 useMemo，类似于 vue 的 Computed，一种记忆化计算存储数据的方式。

 [react ts 速查表](https://react-typescript-cheatsheet.netlify.app/)
 [JSX 对应属性速查表](https://react.docschina.org/reference/react-dom/components/common)
 [html to jsx 转化器](https://transform.tools/html-to-jsx)

---

react 使用 props 进行插槽传递 

```react
 <Card>
    <Avatar />
</Card>  

function Card({ children }) {   
    return (     
        <div className="card">       
            {children}     
        </div>   
    ); 
} 
```

props 不可改变，如果需要的话，设置 state。 可以使用 <Avatar {...props} /> JSX 展开语法转发所有 props，但不要过度使用它！

Fragment 语法的简写形式 <> </> 无法接受 key 值，所以你只能要么把生成的节点用一个 \<div> 标签包裹起来，要么使用长一点但更明确的 \<Fragment> 写法： 

``` react
import { Fragment } from 'react';

// ...

const listItems = people.map(person =>
  <Fragment key={person.id}>
    <h1>{person.name}</h1>
    <p>{person.bio}</p>
  </Fragment>
);
```

组件不会把 key 当作 props 的一部分。  



在计算机科学中（尤其是函数式编程的世界中），纯函数 通常具有如下特征： 

- 只负责自己的任务。它不会更改在该函数调用前就已存在的对象或变量。 

- 输入相同，则输出相同。给定相同的输入，纯函数应总是返回相同的结果。

  

React 提供了 “严格模式”，在严格模式下开发时，它将会调用每个组件函数两次。通过重复调用组件函数，严格模式有助于找到违反这些规则的组件。  

在 React 中，副作用通常属于 事件处理程序。事件处理程序是 React 在你执行某些操作（如单击按钮）时运行的函数。**即使事件处理程序是在你的组件 内部 定义的，它们也不会在渲染期间运行！** 因此事件处理程序无需是纯函数。

---

一个纯函数组件：只负责自己的任务，同样的输入会有同样的输出。



 渲染随时发生，组件之间的渲染不应该互相依赖。



 用于组件渲染的输入不应该被改变，包括 props、state、context，只通过 「设置state」来更新数据。



 useEffect 用作最后的手段。



 尽量避免 dom 操作等会影响全局或者影响其它组件的操作。



 优先编写静态页面，然后再添加交互。



 随时间变化的数据被称为状态（state）。



 自定义事件名称通常以 handle 开头，后跟事件名称，如 handleClick。事件处理函数 props 应该以 on 开头，后跟一个大写字母。



 传递给事件处理函数的函数应直接传递，而非调用。如果需要传参等，用一个箭头函数进行包裹。因为在 JSX { 和 } 之间的 JavaScript 会立即执行。



 事件处理函数接收一个 事件对象 作为唯一的参数。事件默认是冒泡传播，如果你想阻止一个事件到达父组件，使用 e.stopPropagation() 。



 捕获事件， 在事件名后面+Capture，如 onClick 事件对应的捕获事件名是 onClickCapture。



 e.preventDefault() 阻止默认行为。



 与渲染函数不同，事件处理函数不需要是 纯函数，  是执行副作用的最佳位置。



 局部变量无法在多次渲染中持久保存。更改局部变量不会触发渲染。 



 Hook 是特殊的函数，只在 React 渲染时有效。Hook 只能在组件函数的顶层调用。



 什么时候 state 应该用对象。对象的某个属性变化了会触发 react 重渲染吗？应该调用了 setState 就会重渲染。



 每个组件的 useState 维护了一个数组。



 useState 维护数组的一个心智模型：https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e，https://react.docschina.org/learn/state-a-components-memory



 State 不依赖于特定的函数调用或在代码中的位置，它的作用域“只限于”屏幕上的某块特定区域。state 完全私有于声明它的组件。



 导致组件的渲染：1、组件的初次渲染；2、组件（或父组件）的状态发生改变。



 渲染是一个递归的过程，更新后的组件返回另外的组件，继续渲染该组件。



 不要过早进行性能优化。



 对于初次渲染， React 会使用 appendChild() DOM API 将其创建的所有 DOM 节点放在屏幕上。对于重渲染， React 将应用最少的必要操作（在渲染时计算！），以使得 DOM 与最新的渲染输出相互匹配。



 修改 state 的时候，不是即时生效的，例如下列代码，number 一开始为0，那么点击按钮得到的是1。

```react
<button onClick={() => {
  setNumber(number + 1);
  setNumber(number + 1);
  setNumber(number + 1);
}}>+3</button>
```

引入了快照的概念，当下使用的 state 是一个快照，不因为 setState 而变更。



 一个 state 变量的值永远不会在一次渲染的内部发生变化， 即使其事件处理函数的代码是异步的。在 那次渲染的 onClick 内部，number 的值即使在调用 setNumber(number + 5) 之后也还是 0。它的值在 React 通过调用你的组件“获取 UI 的快照”时就被“固定”了。



 React 会使 state 的值始终”固定“在一次渲染的各个事件处理函数内部。 你无需担心代码运行时 state 是否发生了变化。



 如果需要在渲染之前读取最新的 state 值，(类似于 vue 的 nextTick?)，使用状态更新函数。



 发现现象：弹窗阻塞了渲染。



 但是如果你想在下次渲染之前多次更新同一个 state，你可以像 setNumber(n => n + 1) 这样传入一个根据队列中的前一个 state 计算下一个 state 的 函数，而不是像 setNumber(number + 1) 这样传入 下一个 state 值。



 事件处理函数执行完成后，React 将触发重新渲染。在重新渲染期间，React 将处理队列。更新函数会在渲染期间执行，因此 更新函数必须是 纯函数 并且只 返回 结果。



 通过相应 state 变量的第一个字母来命名更新函数的参数：

```react
setEnabled(e => !e);
setLastName(ln => ln.reverse());
setFriendCount(fc => fc * 2);
```



不应该直接改变你在 React 状态中持有的对象和数组。相反，当你想更新一个对象和数组时，你需要创建一个新的对象（或复制现有的对象），然后用这个副本来更新状态。

```react
setPerson({
  ...person,
  artwork: {
    ...person.artwork,
    city: e.target.value
  }
});
```

偷懒可以使用 [use-immer](https://github.com/immerjs/use-immer/blob/master/src/index.ts)这样的方法，看下源码，实现原理是：（待补充.......）

---

use-immer，传入函数，draft 就是深拷贝后的一个对象，看下源码实现。

 简易版实现：

```js
function useImmer(initialData) {
    const [data, setData] = useState(initialData);

    function setDataImmer(fn) {
        const draft = JSON.parse(JSON.stringify(data)); // 这里应该是深拷贝一个对象或者数组
        fn(draft);
        setData(draft);
    }

    return [data, setDataImmer];
}
```



类似这样的页面通常被称作“living styleguide”或“storybook”。将所有状态都列出来的情况。



 你最初的想法或许不是最好的，但是没关系，重构 state 也是步骤中的一部分！

 使用 state 应该尽量精简，不要互相影响。

- 合并关联的 state
- 避免互相矛盾的 state
- 避免冗余的 state：不要将props 作为 state 初始值，只会在第一次渲染的时候初始化一次。
- 避免深度嵌套的 state，将数据扁平化。用id进行标识



将相关状态从这两个组件上移除，并把状态移到最近的父级组件，然后通过 props 将状态传递给这两个组件。这被称为“状态提升”，实现组件间状态共享。



通常我们把包含“不受控制”状态的组件称为“非受控组件”。父组件无法控制面板的激活状态。

当组件中的重要信息是由 props 而不是其自身状态驱动时，就可以认为该组件是“受控组件”。这就允许父组件完全指定其行为。

对于每个独特的状态，都应该存在且只存在于一个指定的组件中作为 state。这一原则也被称为拥有 “可信单一数据源”。



state 有时候需要重置，React 允许你覆盖默认行为，可通过向组件传递一个唯一 key（如 \<Chat key={email}/> 来 强制 重置其状态。

 React 不知道你的函数里是如何进行条件判断的，它只会“看到”你返回的树。在这两种情况下，App 组件都会返回一个包裹着 \<Counter /> 作为第一个子组件的 div。这就是 React 认为它们是 同一个 \<Counter /> 的原因。

 相同位置的不同组件会使 state 重置；key不同会重置。渲染在不同的位置也会重置。
 涉及到 diff 算法了。

 不同位置的写法：

```react
      {isPlayerA &&
        <Counter person="Taylor" />
      }
      {!isPlayerA &&
        <Counter person="Sarah" />
      }
```

永远要将组件定义在最上层并且不要把它们的定义嵌套起来。否则会在渲染的时候被重置。

---

图片的时候会出现下一张图片没有加载出来，上一张图片继续展示的情况，需要加 key 值进行避免。
 [对 state 进行保留和重置_挑战4](https://react.docschina.org/learn/preserving-and-resetting-state)

 reducer，一种将对状态所有的变更都进行封装的方式，

```react
[tasks, dispatch] = useReducer(tasksReducer, initialTashs);

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('未知 action: ' + action.type);
    }
  }
}
```

建议使用 switch，将每个 case 块包装到 { 和 } 花括号中，这样在不同 case 中声明的变量就不会互相冲突。此外，case 通常应该以 return 结尾。



 分离关注点时，我们可以更容易地理解组件逻辑。



 两次 dispatch 的计算值，会进行累计。不像 setState 一样，取到的是当前的 state，取到的都是最新的 state



 不要把业务逻辑写在 reducer 里面，严格模式下开发环境会被执行两次，非纯函数。在这里尽量只处理 state 的状态。



 useReducer 的实现：

```react
import { useState } from 'react';

function useReducer(reducer, initialState) {
    const [state, setState] = useState(initialState);

    function dispatch(action) {
        setState((s) => reducer(s, action));
    }

    return [state, dispatch];
}
```

目前已掌握的 hooks：useState，useReducer

 context：useContext，createContext



大写命名 context，如果没有找到包裹的 context，就是取的默认值。



优先使用 props，不需要过早的优化。



 将 reducers 和 context 组合在一起使用，以管理复杂应用的状态。（技巧）



 创建 context：

```react
import { createContext } from 'react';

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);
```

然后把 tasks 和 dispatch 传入就可以，进一步封装：

```react
export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
```

还可以将获取的逻辑也封装成函数

```react
export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}
```

保持组件的干净和整洁，让我们专注于它们显示的内容，而不是它们从哪里获得数据。

---

```react
import { createContext, useContext, useReducer } from 'react';

const TasksContext = createContext(null);

const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialTasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];

```

---

[React 在渲染列表时，列表元素的 Key 重复了会怎样？](https://judes.me/frontend/2020/09/12/react-list-repeated-key.html)


 useRef，与 useState 一样，在多次渲染的时候数据会进行保留，不同的是数据变更的时候不会触发渲染。使用方式不同，ref 会被保存，可以直接修改，数据结构是 {current: xxx}

```react
let ref = useRef(0);
ref.current = ref.current + 1;
```

useRef 的实现可以是下面这样：

```react
function useRef(initialValue) {
    const [ref, unused] = useState({ current: initialValue });
    return ref;
}
```

ref 就是不会触发渲染的 state。

 ref 获取 DOM，不能是自定义的组件。

```react
import { useRef } from 'react';
const myRef = useRef(null);
<div ref={myRef}></div>
// 你可以使用任意浏览器 API，例如：
myRef.current.scrollIntoView();
```

**Hook 只能在组件的顶层被调用。不能在循环语句、条件语句或 map() 函数中调用 useRef 。**



 将函数传递给 ref 属性。这称为 ref 回调。通过函数将 node 节点保存到一个 map 类型的ref 中

```react
{catList.map((cat) => (
    <li
        key={cat.id}
        ref={(node) => {
            const map = getMap();
            if (node) {
                map.set(cat.id, node);
            } else {
                map.delete(cat.id);
            }
        }}
    >
        <img src={cat.imageUrl} alt={'Cat #' + cat.id} />
    </li>
))}
```

本质上是将 dom 通过 ref 属性进行抛出。



 默认情况下，React 不允许组件访问其他组件的 DOM 节点。甚至自己的子组件也不行！所以自定义组件无法通过 ref 获取到 DOM。

---

ref 没办法直接通过自定义组件的 ref 属性传递给子组件，需要通过 forwardRef 方法进行传递

```react
const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});
```

useImperativeHandle 将指定的对象作为父组件的 ref 值。realInputRef 是真正绑定的DOM 节点：

```react
const MyInput = forwardRef((props, ref) => {
    const realInputRef = useRef(null);
    useImperativeHandle(ref, () => ({
        // 只暴露 focus，没有别的
        focus() {
            realInputRef.current.focus();
        },
    }));
    return <input {...props} ref={realInputRef} />;
});
```

强制 React 同步更新（“刷新”）DOM。 为此，从 react-dom 导入 flushSync 并将 state 更新包裹 到 flushSync 调用中：

```react
flushSync(() => {
  setTodos([ ...todos, newTodo]);
});
```

避免更改由 React 管理的 DOM 节点。 对 React 管理的元素进行修改、添加子元素、从中删除子元素会导致不一致的视觉结果。

---

effect，监听器，类似于Vue 的computed。
 Effect 在屏幕更新后的 提交阶段 运行。
 Effect 通常用于暂时“跳出” React 代码并与一些 外部 系统进行同步。
 默认情况下，Effect 会在每次渲染后都会执行。有时 Effect 需要指定如何停止、撤销，或者清除它的效果。

```react
function MyComponent() {
  useEffect(() => {
    // 每次渲染后都会执行此处的代码
  });
  return <div />;
}
```

Effect 通常应该使组件与 外部 系统保持同步。如果没有外部系统，你只想根据其他状态调整一些状态，那么 你也许不需要 Effect。
 React 使用 Object.is 比较依赖项的值。

```react
useEffect(() => {
  // 这里的代码会在每次渲染后执行
});

useEffect(() => {
  // 这里的代码只会在组件挂载后执行一次
}, []);

useEffect(() => {
  //这里的代码只会在每次渲染后，并且 a 或 b 的值与上次渲染不一致时执行
}, [a, b]);
```

effect 的参数函数的返回值是清理函数，在卸载的时候会进行运行，清理不必要的东西。在开发环境 React 会主动调用两次，用来进行检查。
 例如某些 API 可能不允许连续调用两次，就需要实现清理函数。

```react
useEffect(() => {
  const dialog = dialogRef.current;
  dialog.showModal();
  return () => dialog.close();
}, []);
```

订阅事件的清理：

```react
useEffect(() => {
  function handleScroll(e) {
    console.log(window.scrollX, window.scrollY);
  }
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

重置动画

```react
useEffect(() => {
  const node = ref.current;
  node.style.opacity = 1; // 触发动画
  return () => {
    node.style.opacity = 0; // 重置为初始值
  };
}, []);
```

中止数据获取操作：无法撤销已经发生的网络请求。

```react
useEffect(() => {
  let ignore = false;

  async function startFetching() {
    const json = await fetchTodos(userId);
    if (!ignore) {
      setTodos(json);
    }
  }

  startFetching();

  return () => {
    ignore = true;
  };
}, [userId]);
```

如果开发环境中，第二次请求给你造成了困扰，最好的方法是使用一种可以删除重复请求、并缓存请求响应的解决方案：

```react
function TodoList() {
  const todos = useSomeDataLibrary(`/api/user/${userId}/todos`);
  // ...
```

尽量使用框架，如果自己编写请求方案，注意添加用于删除重复请求、缓存响应和避免网络瀑布（通过预加载数据或将数据需求提升到路由）的逻辑。



 目前受欢迎的开源解决方案是 React Query、useSWR 和 React Router v6.4+。



 日志类的上报可以不用进行处理，可以暂时取消严格模式，在开发环境进行加载检查。还可以考虑换成路由变更事件处理程序中发送分析数据。



 某些逻辑应该只在应用程序启动时运行一次。比如，验证登陆状态和加载本地程序数据。你可以将其放在组件之外：

```react
if (typeof window !== 'undefined') { // 检查是否在浏览器中运行
  checkAuthToken();
  loadDataFromLocalStorage();
}

function App() {
  // ……
}
```

其他情况：“购买”的操作不应由组件的挂载、渲染引起的；它是由特定的交互作用引起的，它应该只在用户按下按钮时运行。因此，它不应该写在 Effect 中，应当把 /api/buy 请求操作移动到购买按钮事件处理程序中.



 React 总是在执行下一轮渲染的 Effect 之前清理上一轮渲染的 Effect。



 每一轮渲染都有自己的 Effect。



 使用显式标记，如 ignore 变量，是修复条件竞争最可靠的方法。

---

如果没有涉及到外部系统（例如，需要根据一些 props 或 state 的变化来更新一个组件的 state），不应该使用 Effect。移除不必要的 Effect 可以让代码更容易理解，运行得更快，并且更少出错。

 在渲染时进行尽可能多地计算。

 如果一个值可以基于现有的 props 或 state 计算得出，不要把它作为一个 state，而是在渲染期间直接计算这个值。这将使你的代码更快（避免了多余的 “级联” 更新）、更简洁（移除了一些代码）以及更少出错（避免了一些因为不同的 state 变量之间没有正确同步而导致的问题）。

 计算之后，进行渲染，然后执行 effect，如果 effect 中进行了数据修改，那么会重新进行渲染。

 effect 类似于 watch，，useMemo 类似于 computed，进行缓存。
 传入 useMemo 的函数会在渲染期间执行，仅适用于纯函数场景。

 当你决定将某些逻辑放入事件处理函数还是 Effect 中时，你需要回答的主要问题是：从用户的角度来看它是 怎样的逻辑。如果这个逻辑是由某个特定的交互引起的，请将它保留在相应的事件处理函数中。如果是由用户在屏幕上 看到 组件时引起的，请将它保留在 Effect 中。
 **重置数据**
 需要重置数据的时候，如果用 effect 进行处理，比较低效。比较好的做法是提取成组件，给一个key值，当key值变化的时候，react 会重新渲染新组件，从而重置数据状态。
 **重置部分数据**

```react
function List({ items }) {
  const [isReverse, setIsReverse] = useState(false);
  const [selection, setSelection] = useState(null);

  // 好一些：在渲染期间调整 state
  const [prevItems, setPrevItems] = useState(items);
  if (items !== prevItems) {
    setPrevItems(items);
    setSelection(null);
  }
  // ...
}
```

[存储前次渲染信息](https://react.docschina.org/reference/react/useState#storing-information-from-previous-renders)

 任何其他副作用（比如变化 DOM 或设置的延时）应该留在事件处理函数或 Effect 中，以 保持组件纯粹。

 无论你怎么做，根据 props 或其他 state 来调整 state 都会使数据流更难理解和调试。总是检查是否可以通过添加 key 来重置所有 state，或者 在渲染期间计算所需内容。

 当你不确定某些代码应该放在 Effect 中还是事件处理函数中时，先自问 为什么 要执行这些代码。Effect 只用在执行那些挂载组件时 需要执行 的代码。如果是在事件处理后执行的代码，则用事件处理函数处理。

 如果某些逻辑必须在 每次应用加载时执行一次，而不是在 每次组件挂载时执行一次，可以添加一个顶层变量来记录它是否已经执行过了：

```react
let didInit = false;

function App() {
  useEffect(() => {
    if (!didInit) {
      didInit = true;
      // ✅ 只在每次应用加载时执行一次
      loadDataFromLocalStorage();
      checkAuthToken();
    }
  }, []);
  // ...
}
```

每当你尝试保持两个不同的 state 变量之间的同步时，试试状态提升！

 保持数据流的可预测性：数据从父组件流向子组件。

 尽管通常可以使用 Effect 来实现此功能，但 React 为此针对性地提供了一个 Hook 用于订阅外部 store。删除 Effect 并将其替换为调用 useSyncExternalStore：
```react
function subscribe(callback) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}

function useOnlineStatus() {
  // ✅ 非常好：用内置的 Hook 订阅外部 store
  return useSyncExternalStore(
    subscribe, // 只要传递的是同一个函数，React 不会重新订阅
    () => navigator.onLine, // 如何在客户端获取值
    () => true // 如何在服务端获取值
  );
}

function ChatIndicator() {
  const isOnline = useOnlineStatus();
  // ...
}
```

[useSyncExternalStore](https://react.docschina.org/reference/react/useSyncExternalStore)

 处理竞态条件并不是实现数据获取的唯一难点。你可能还需要考虑缓存响应结果（使用户点击后退按钮时可以立即看到先前的屏幕内容），如何在服务端获取数据（使服务端初始渲染的 HTML 中包含获取到的内容而不是加载动画），以及如何避免网络瀑布（使子组件不必等待每个父组件的数据获取完毕后才开始获取数据）。

 获取数据，将获取逻辑提取到一个自定义 Hook 中：

```react
function SearchResults({ query }) {
  const [page, setPage] = useState(1);
  const params = new URLSearchParams({ query, page });
  const results = useData(`/api/search?${params}`);

  function handleNextPageClick() {
    setPage(page + 1);
  }
  // ...
}

function useData(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    let ignore = false;
    fetch(url)
      .then(response => response.json())
      .then(json => {
        if (!ignore) {
          setData(json);
        }
      });
    return () => {
      ignore = true;
    };
  }, [url]);
  return data;
}
```

摘要：

- 如果你可以在渲染期间计算某些内容，则不需要使用 Effect。

- 想要缓存昂贵的计算，请使用 useMemo 而不是 useEffect。

- 想要重置整个组件树的 state，请传入不同的 key。

- 想要在 prop 变化时重置某些特定的 state，请在渲染期间处理。

- 组件 显示 时就需要执行的代码应该放在 Effect 中，否则应该放在事件处理函数中。

- 如果你需要更新多个组件的 state，最好在单个事件处理函数中处理。

- 当你尝试在不同组件中同步 state 变量时，请考虑状态提升。

- 你可以使用 Effect 获取数据，但你需要实现清除逻辑以避免竞态条件。

  

 Effect 的生命周期不同于组件。组件可以挂载、更新或卸载。Effect 只能做两件事：开始同步某些东西，然后停止同步它。如果 Effect 依赖于随时间变化的 props 和 state，这个循环可能会发生多次。



 代码中的每个 Effect 应该代表一个独立的同步过程。.删除一个 Effect 不会影响另一个 Effect 的逻辑。这表明它们同步不同的内容，因此将它们拆分开是有意义的。另一方面，如果将一个内聚的逻辑拆分成多个独立的 Effects，代码可能会看起来更加“清晰”，但 维护起来会更加困难。

---

prop 与 state，以及依赖它们计算得到的值，都是响应式的。

 Effect 依赖项必须包括 Effect 中读取的每个 响应式值。如果有部分 state 是不想被依赖的话，应该提取到 useEffectEvent 事件中。

 理想情况下，应用程序中的大多数 Effect 最终都应该由自定义 Hook 替代，无论是由你自己编写还是由社区提供。自定义 Hook 隐藏了同步逻辑，因此调用组件不知道 Effect 的存在。随着你继续开发应用程序，你将开发出一套可供选择的 Hooks，并且最终将不再经常在组件中编写 Effect。

 **useEffectEvent**(实验中的功能)
 Effect 读取的每一个响应式值都必须在其依赖项中声明。
 暂时使用下面这个进行依赖项抑制：

```react
 // eslint-disable-next-line react-hooks/exhaustive-deps
```

---

**移除 effect 依赖。**
 不是响应式值（并且不能在重新渲染时改变），那它不就不是依赖。一个数据要清楚它什么时候会被改变。

 把依赖看作是 Effect的代码所依赖的所有响应式值的列表。你不要 选择 把什么放在这个列表上。该列表 描述了 代码。要改变依赖，请改变代码。

 \- 你应该考虑的第一件事是，这段代码是否应该成为 Effect。
 \- 下一个应该问自己的问题是，Effect 是否在做几件不相关的事情。

 Effect 的依赖项，需要注意的是是否是对象（Effect 使用 Object.is 进行判断）并且每次渲染都会重新创建，这会导致 Effect 重新执行。如果是静态值，可以考虑移出组件，或者在Effect 里面创建。函数也同样适用。

 如果是 props 传递过来的数据，对象或者函数，如果作为 effect 的依赖，可能每次父组件渲染的时候会导致子组件的 effect 重新执行，比较好的方案是在 effect 外进行对象属性的获取，然后再传递给 effect。

 如果是函数，也是在 effect 外进行执行获取返回值，再作为 effect 依赖。如果不行并且是事件处理程序，那就用 effect event 进行包装。

 如果不需要传参，考虑 setState 函数是否可以用回调函数，将上一个state进行自增或者自减这种，就可以避免被 linter 进行依赖检测。

 **发现 react 的 linter 是一个很重要的东西，能够提示并且避免很多问题。**

 **使用自定义 Hook 复用逻辑**
 React 组件名称必须以大写字母开头。
 Hook 的名称必须永远以 use 开头，然后紧跟一个大写字母。

 自定义 Hook 共享的是状态逻辑，而不是状态本身。只是复用代码逻辑，状态本身是独立的。

 每当组件重新渲染，自定义 Hook 中的代码就会重新运行。这就是组件和自定义 Hook 都 需要是纯函数 的原因。我们应该把自定义 Hook 的代码看作组件主体的一部分。

 增加对 onReceiveMessage 的依赖并不理想，因为每次组件重新渲染时聊天室就会重新连接。 通过 将这个事件处理函数包裹到 Effect Event 中来将它从依赖中移除：

```react
import { useEffect, useEffectEvent } from 'react';
// ...

export function useChatRoom({ serverUrl, roomId, onReceiveMessage }) {
  const onMessage = useEffectEvent(onReceiveMessage);

  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId
    };
    const connection = createConnection(options);
    connection.connect();
    connection.on('message', (msg) => {
      onMessage(msg);
    });
    return () => connection.disconnect();
  }, [roomId, serverUrl]); // ✅ 声明所有依赖
}
```

每当你写 Effect 时，考虑一下把它包裹在自定义 Hook 是否更清晰。你不应该经常使用 Effect，所以如果你正在写 Effect 就意味着你需要“走出 React”和某些外部系统同步，或者需要做一些 React 中没有对应内置 API 的事。把 Effect 包裹进自定义 Hook 可以准确表达你的目标以及数据在里面是如何流动的。

 理想情况下，你的自定义 Hook 名称应该清晰到即使一个不经常写代码的人也能很好地猜中自定义 Hook 的功能，输入和返回：

 ✅ useData(url)
 ✅ useImpressionLog(eventName, extraData)
 ✅ useChatRoom(options)
 当你和外部系统同步的时候，你的自定义 Hook 名称可能会更加专业，并使用该系统特定的术语。只要对熟悉这个系统的人来说名称清晰就可以：

 ✅ useMediaQuery(query)
 ✅ useSocket(url)
 ✅ useIntersectionObserver(ref, options)

 好的自定义 Hook 通过限制功能使代码调用更具声明性。例如 useChatRoom(options) 只能连接聊天室，而 useImpressionLog(eventName, extraData) 只能向分析系统发送展示日志。如果你的自定义 Hook API 没有约束用例且非常抽象，那么在长期的运行中，它引入的问题可能比解决的问题更多。

 把 Effect 包裹进自定义 Hook 有益的另一个原因：
 \- 你让进出 Effect 的数据流非常清晰。
 \- 你让组件专注于目标，而不是 Effect 的准确实现。
 \- 当 React 增加新特性时，你可以在不修改任何组件的情况下移除这些 Effect。

---

使用浏览器的 requestAnimationFrame API 从头开始 实现一个 fade-in 动画。

```react
import { useState, useEffect, useRef } from 'react';

function Welcome() {
  const ref = useRef(null);

  useEffect(() => {
    const duration = 1000;
    const node = ref.current;

    let startTime = performance.now();
    let frameId = null;

    function onFrame(now) {
      const timePassed = now - startTime;
      const progress = Math.min(timePassed / duration, 1);
      onProgress(progress);
      if (progress < 1) {
        // 我们还有更多的帧需要绘制
        frameId = requestAnimationFrame(onFrame);
      }
    }

    function onProgress(progress) {
      node.style.opacity = progress;
    }

    function start() {
      onProgress(0);
      startTime = performance.now();
      frameId = requestAnimationFrame(onFrame);
    }

    function stop() {
      cancelAnimationFrame(frameId);
      startTime = null;
      frameId = null;
    }

    start();
    return () => stop();
  }, []);

  return (
    <h1 className="welcome" ref={ref}>
      Welcome
    </h1>
  );
}
```

