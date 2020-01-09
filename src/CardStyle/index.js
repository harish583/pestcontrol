import React from 'react';
import { Link } from 'react-router-dom';

class CardStyle extends React.Component {
  render(){
    var { content } = this.props;
    return (
      <div className="card-style w-25 text-center">
        <div className="card-content">
          <div className="image-card-holder"><img src={content.icon} alt="" /></div>
          <div className="swipe-up-hover">
            <h2>{content.name}</h2>
            {/* <div>{content.content}</div> */}
            {content.more !== '' && <Link to={content.more} href={content.more } className="more" >Read More ...</Link>}
          </div>
        </div>
      </div>
    );
  }
}

export default CardStyle;
