import React from 'react'; //创建组件，虚拟dom元素，生命周期
import ReactDom from 'react-dom'; //把创建好的组件和虚拟dom放到页面上展示
export default function Hello(props) {
  console.log(props);
  props.dox.na = 456;
  return <div>这是hello组件----{props.name}</div>;
}
