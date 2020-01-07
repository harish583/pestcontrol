import React from 'react';
import './index.scss';

class Services extends React.Component {
    render(){
    var { Service } = this.props;
    return (
      <div className="Fact-container-service">
        <div className="swiper-container">
          <img src={Service.swiperImage} className="swiper-image" alt=""/>
          <span  className="p-a top text-shadow">
    <div>{Service.swiperMainHeadding}</div>
    <div>{Service.swiperHeadding}</div>
          </span>
        </div>
         <section className="chose_video_area app-content">
            <div className="chose_left_text">
              <img src={Service.contentImage} alt="" /> 
                <div className="chose_text_inner">
                    <div className="main_b_title">
                    <h2>{Service.textHeader}</h2>
                    {Service.textContent.map(ele=><><div className="text-justify">{ele}</div><br /></>)}
					
                </div>
            </div>
            </div>
        </section>
        </div>
    );
  }
}

export default Services;
