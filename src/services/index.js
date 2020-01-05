import React, { Children } from 'react';
import Card from '../Card';
import ControlArea from '../controlArea';
import './index.scss';
import FooterBottom from '../footerTop';
import FooterTop from '../footerBottom';
// import FooterMiddle from '../footerMiddle';
// import DemoCarousel from './swiper.js.js';

import homeswiper from '../images/home-slider/slider-1.gif';
import fr from '../images/pest control services in Hyderabad.jpg';
import cockroach from '../images/icon/cockroach.png';
import spider from '../images/icon/spider.png';
import ant from '../images/icon/ant.png';
import beetle from '../images/icon/beetle.png';
import Bee from '../images/icon/wasp.png';
import Rodent from '../images/icon/MiceRatRemoval-Icon-01.png';
import Termite from '../images/icon/termite+icon+black.png';
import Snake from '../images/icon/10-2-snake-transparent.png';
import Mosquito from '../images/icon/Animals-Mosquito-icon.png';
import MosquitoMesh from '../images/icon/images.png';
import RESIDENTIAL from '../images/download.png';
import INDUSTRIAL from '../images/factory-industry-512.png';
import industry from '../images/industry.jpg';
import cmmerical from '../images/cmmerical.jpg';
import residential from '../images/residential.jpg';
import about from '../images/video-1.jpg';
import echo from '../images/icon/s2-icon-1.png';
import freeHome from '../images/icon/s2-icon-2.png';
import fastPest from '../images/icon/s2-icon-3.png';

class Services extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    var { Service } = this.props;
    debugger;
    return (
      <div className="Fact-container-service">
        <div className="swiper-container">
          <img src={Service.homeswiper} className="swiper-image"/>
          <span  className="p-a top">
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
    {Service.textContent.map(ele=><><div>{ele}</div><br /></>)}
					
                </div>
            </div>
            </div>
        </section>
        </div>
    );
  }
}

export default Services;
