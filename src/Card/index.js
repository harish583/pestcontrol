import React from 'react';
class Card extends React.Component {
  render(){
    var { content } = this.props;
    return (
      <div className="card w-25 text-center">
        <div className="card-content">
          <div><img src={content.icon} /></div>
          <h2>{content.name}</h2>
          <div>{content.content}</div>
          {content.more !== '' && <a href={content.more}className="more" >Read More ...</a>}
        </div>
      </div>
    );
  }
}

export default Card;
