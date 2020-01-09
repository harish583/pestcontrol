import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class DemoCarousel extends Component {
    constructor(props){
        super(props);
    }
    render() {
        var {slider} = this.props;
        return (
            <Carousel interval="4000" infiniteLoop="true" selectedItem="20" thumbWidth="200" autoPlay="true" stopOnHover="true">
                {slider.map((slide,i)=>
                <div className="slidd">
                    <img src={slide.icon} />
                    <span  className="p-a top text-shadow">
                        <div>We are Pest Control</div>
                        <div>we Remove pests </div>
                    </span>
                </div>
                )}
            </Carousel>
        );
    }
};
export default DemoCarousel;