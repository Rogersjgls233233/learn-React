import React from 'react'; //创建组件，虚拟dom元
import cssitem from '@/css/cmtlist.css';
export default function CmtItem(props) {
  return (
    <div
      key={props.id}
      style={{
        border: '1px dashed #ccc',
        margin: '10px',
        padding: '10px',
        boxShadow: '0 0 10px #ccc'
      }}>
      <h3>评论人:{props.user}</h3>
    </div>
  );
}
