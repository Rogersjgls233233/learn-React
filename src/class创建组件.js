class Movie extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: '我是class创建的组件'
    };
    //这个state相当于vue中的data()return{}
    // props中的数据是从外界传递过来的
    // data/state中的数据,都是组件私有的;(ajax获得----)
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
