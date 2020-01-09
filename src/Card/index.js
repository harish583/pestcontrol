import React from 'react';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render(){
    var { content } = this.props;
    return (
      <Link to={content.more} className="card w-25 text-center">
        <div className="card-content">
          <div className="image-card-holder"><img src={content.icon} alt="" /></div>
          <h2 className="nameeee">{content.name}</h2>
          {/* <div>{content.content}</div> */}
          {/* {content.more !== '' && <Link href={content.more}className="more" >Read More ...</Link>} */}
        </div>
      </Link>
    );
  }
}

export default Card;
