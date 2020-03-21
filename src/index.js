import React from 'react'; //创建组件，虚拟dom元素，生命周期
import ReactDom from 'react-dom'; //把创建好的组件和虚拟dom放到页面上展示
import '@/class基本使用';

class Movie extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: '我是class创建的组件'
    };
    //这个state相当于vue中的data()return{}
  }

  // 由于Movie组件继承。。。父类，所以在构造器中必须使用super

  render() {
    // 实例方法
    // 必须返回合法的JSX dom 结构
    // return null;
    return (
      <div>
        这是Movie组件
        <h3>{this.state.msg}</h3>
      </div>
    );
  }
}
const mydiv = (
  <div id='mydiv' title='div aaaa'>
    123
    <Movie></Movie>
  </div>
);
// 调用render函数渲染
ReactDom.render(mydiv, document.getElementById('app'));
