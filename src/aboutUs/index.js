import React from 'react';
import Card from '../Card';
import './index.scss';

import homeswiper from '../images/home-slider/slider-1.gif';
import about from '../images/video-1.jpg';
import echo from '../images/icon/s2-icon-1.png';
import freeHome from '../images/icon/s2-icon-2.png';
import fastPest from '../images/icon/s2-icon-3.png';

class AboutUs extends React.Component {
  constructor(props){
    super(props);
    this.state ={

      cards :[
        {
          name:"ECO FRIENDLY ",
          more:'',
          content:'We are using the 100 % Eco Friendly products to Eliminate the pests. These products are not harm ful to family.',
          icon:echo
        },{
          name:"FREE HOME INSPECTION",
          more:'',
          content:'We are providing the free Home Inspection services to the customer and also we are providing 24-hour Customer Support Also.',
          icon:freeHome
        },{
          name:"FAST PEST REMOVAL",
          more:'',
          content:'We have a professional and high-quality team, our trained staff will protect your home and family against any pests ',
          icon:fastPest
        }
      ],
      // controlAreas:[
      //   {
      //     name:"Industrial pest control",
      //     more:'#',
      //     content:'We eliminate all types of pest Control like mosquitoes, rodents, termites ',
      //     icon:industry
      //   },{
      //     name:"commercial pest control",
      //     more:'#',
      //     content:'We eliminate all types of pest Control like mosquitoes, rodents, termites,',
      //     icon:cmmerical
      //   },{
      //     name:"RESIDENTAL pest control",
      //     more:'#',
      //     content:'We eliminate all types of pest Control like insect control, termite control,',
      //     icon:residential
      //   },
      // ],
      // footerSlides:[
      //   {
      //     name:"Industrial pest control",
      //     more:'#',
      //     content:'We eliminate all types of pest Control like mosquitoes, rodents, termites ',
      //     icon:industry
      //   },{
      //     name:"commercial pest control",
      //     more:'#',
      //     content:'We eliminate all types of pest Control like mosquitoes, rodents, termites,',
      //     icon:cmmerical
      //   },{
      //     name:"RESIDENTAL pest control",
      //     more:'#',
      //     content:'We eliminate all types of pest Control like insect control, termite control,',
      //     icon:residential
      //   },
      // ]
    }
  }
  render(){
    var cards = this.state.cards;
    return (
      <div className="Fact-container">
        <div className="swiper-container">
          <img src={homeswiper} className="swiper-image" alt=""/>
          <span  className="p-a top text-shadow">
            <div>AboutUs</div>
            <div>Home / AboutUs</div>
          </span>
        </div>
         <section className="chose_video_area app-content">
            <div className="chose_left_text text-justify"><img src={about} alt="" /> 
                <div className="chose_text_inner ">
                    <div className="main_b_title">
                        <h2>Why <br className="title_br" /> Choose Us?</h2>
                        <h6>My Mark Pest Control Service</h6>
                    </div>
                    <p>With our 24-hour reaction time, we have a tendency to make sure you can have your pest control issue addressed immediately. We have a tendency to create pest protection simple and hassle-free, providing you with the simplest client service expertise within the business. For any type of inquiry regarding the Pest Control in Hyderabad call us at 9949700744. Or Mail us at: mymarkpest@gmail.com</p>
                    <ul>
                        <li>100% Quality Services</li>
                        <li>Always on Time</li>
                        <li>A friendly service</li>
                        <li>Value for Money</li>
                    </ul>
					
                </div>
            </div>
        </section>
        {/* <div className="cards-component app-content">
          {cards.map((ele,i)=> <Card content={ele} key={i}/> )} 
        </div> */}
        <div className="service_single_inner app-content">          
          <div className="row s_text_inner">
            <div className="col-md-6">
                <div className="left_service_desc text-justify">
                    <h2 className="project_title">Company Overview</h2>
                    <p>My Mark Pest Control Services is the Best Pest Control services in Hyderabad. We provide Pest Control Services for Commercial, Industrial and Residential properties. My Mark Pest Control uses the best available pest control solutions. We use environmentally friendly products to an element of the pests. We are the Leading Pest Control Services Provider in Hyderabad for any kinds of Information call us at 9949700744. Or Mail us at : mymarkpest@gmail.com. My Mark Pest Control services offer efficient and fast pest control services in Hyderabad for commercial properties, homes, and industry. We treat all Enquiries quickly because pests will transmit diseases.</p>
                    <ul>
                        <li>Highly Qualified Experts </li>
                        <li>Modern Equipment &amp; Technologies</li>
                        <li>Great Discounts on prices</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-6">
                <div className="our_skill_inner">
                    <div className="single_skill">
                        <p>We Provide All types of pest Control Services in Hyderabad. For More Details call us on <a href="tel:9949700744" className="text-hover-zoom">9949700744</a> or  mail us <a href="mailto:mymarkpest@gmail.com">mymarkpest@gmail.com</a></p>
                    </div>                                                               
                </div>
                <div className="service_brochure">
                    <h4 className="project_title">Service Description</h4>
                    <p>We provide all types of Pest Control Solution. If you have any pest we have a solution. we provide Residential Pest Control, Industrial Pest Control, Commercial Pest Control. From below you have to download our Brochure and get full Details.</p>
                    <a href="#"><i className="fa fa-file-pdf-o" aria-hidden="true"></i>Download PDF</a><br />
                    <a href="#"><i className="fa fa-file-pdf-o" aria-hidden="true"></i>Download DOC</a>
                </div>
            </div>
          </div>
      </div>
      </div>
    );
  }
}

export default AboutUs;
