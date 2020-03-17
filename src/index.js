import React from "react"; //创建组件，虚拟dom元素，生命周期
import ReactDom from "react-dom"; //把创建好的组件和虚拟dom放到页面上展示

//创建虚拟dom元素
// 参数1：创建元素的类型，字符串，表示元素名称
// 参数2：一个对象或null，表示当前dom属性
// 参数3：子节点（包括文本子节点和虚拟dom）
// 参数n:其他子节点

const myh1 = React.createElement(
  "h1",
  {
    id: "myh1",
    title: "this is a h1"
  },
  "HelloWorld"
);
const mydiv = (
  <div id="mydiv" title="div aaaa">
    这是一个div
  </div>
);

ReactDom.render(mydiv, document.getElementById("app"));
