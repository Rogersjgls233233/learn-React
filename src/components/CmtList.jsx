import React from 'react'; //创建组件，虚拟dom元
import CmtItem from '@/components/CmtItem';
import cssitem from '@/css/cmtlist.css';
// 直接导入的css表默认全局整个项目生效_--作用域
export default class CmtList extends React.Component {
  constructor() {
    super();
    this.state = {
      CommentList: [
        {
          id: 1,
          user: '张三'
        },
        {
          id: 2,
          user: '李四'
        },
        {
          id: 3,
          user: '王五'
        },
        {
          id: 4,
          user: '赵六'
        }
      ]
    };
  }
  // this.setState方法是异步的,如果在调用完以后要拿到新的值,要使用this.setState({},callback)
  render() {
    return (
      <div>
        {/* 在JSX中要使用行内样式,不能为style设置字符串的值 */}
        <h1 className={[cssitem.title, 'text'].join(' ')}>评论列表</h1>
        {this.state.CommentList.map(item => (
          <CmtItem {...item} key={item.id}></CmtItem>
        ))}
      </div>
    );
  }
}
