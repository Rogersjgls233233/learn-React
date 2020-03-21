import React from 'react'; //创建组件，虚拟dom元素，生命周期
import ReactDom from 'react-dom'; //把创建好的组件和虚拟dom放到页面上展示
import CmtList from '@/components/CmtList';
const mydiv = (
  <div id='mydiv' title='div aaaa'>
    <CmtList></CmtList>
  </div>
);
// 调用render函数渲染
ReactDom.render(mydiv, document.getElementById('app'));
