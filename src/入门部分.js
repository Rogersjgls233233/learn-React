import React from 'react'; //创建组件，虚拟dom元素，生命周期
import ReactDom from 'react-dom'; //把创建好的组件和虚拟dom放到页面上展示

// 不做单独配置的话不能省略后缀名
import Hello from '@/components/Hello';
//创建虚拟dom元素
// 参数1：创建元素的类型，字符串，表示元素名称
// 参数2：一个对象或null，表示当前dom属性
// 参数3：子节点（包括文本子节点和虚拟dom）
// 参数n:其他子节点

let a = 10;
let str = 'HelloWorld';
let boo = true;
const h1 = <h1>nihao</h1>;

const myh1 = React.createElement(
  'h1',
  {
    id: 'myh1',
    title: 'this is a h1'
  },
  'HelloWorld'
);
// 第一种创建组件的方式，组件必须有return，若为null表示什么都不渲染
// vue跟react中通过props传值的数据都是只读的，不可修改
// 特别注意，这里的不可修改是指在栈中的量不可修改，但是堆里面的东西可以改
const user = {
  name: 'yellow',
  age: 3,
  gender: 'Male',
  dox: {
    na: 123,
    el: 345
  }
};
const arrstr = ['123', '234', '345'];
//定义一个数组，将来可以用来存放标签

const nameArr = [];
// React中，需要把key添加给被foreach或map或for循环直接控制的元素
const resultdom = arrstr.map(item => {
  return <h5 key={item}>{item}</h5>;
});
console.log(resultdom);

const mydiv = (
  <div id='mydiv' title='div aaaa'>
    {a + 2} <hr /> {str + 1} <hr />
    {boo ? '条件为真' : '条件为假'}
    <p title={str}>这是p标签</p>
    {h1}
    {/*这是JSX注释 */}
    <hr />
    <hr />
    {resultdom}
    <hr />
    <p className='pname'>asdsdas</p>
    <hr />
    {/* 注意className和HTMLfor */}
    {/*  */}
    {/* <Hello name={user.name} dox={user.dox}></Hello> */}
    <Hello {...user}></Hello>
  </div>
);
// 调用rebder函数渲染
ReactDom.render(mydiv, document.getElementById('app'));
