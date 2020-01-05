import React from 'react';
class ControlArea extends React.Component {
  render(){
    var { content } = this.props;
    return (
      <div className="ControlArea w-25 text-center">
        <div className="ControlArea-content">
          <div><img src={content.icon} /></div>
          <h2>{content.name}</h2>
          <div>{content.content}</div>
          <a href={content.more} className="more" >Read More ...</a>
        </div>
      </div>
    );
  }
}

export default ControlArea;
