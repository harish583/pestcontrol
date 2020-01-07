import React from 'react';
import Card from '../Card';
import ControlArea from '../controlArea';

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

class HomeComponent extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      cards :[
        {
          name:"cockroach",
          more:'#',
          content:'The cockroach is characterized by a two-dimensional oval body, long filiform antennae',
          icon:cockroach
        },{
          name:"spider",
          more:'#',
          content:'Spiders are crawling pests it has 2 body segments, 8 legs, no adduction mouth components and',
          icon:spider
        },{
          name:"ant",
          more:'#',
          content:'Ant is a small insect typically having a sting. Ant is a crawling pest. Ants are a social ',
          icon:ant
        },
        {
          name:"Bedbug",
          more:'#',
          content:'Bed bugs have small, flat, oval-shaped bodies. They are wingless. Bed Bug is crawling Pest.',
          icon:beetle
        },{
          name:"Bee",
          more:'#',
          content:'Bees are flying insects closely related to wasps. Most of the bees find at white clover,',
          icon:Bee
        },{
          name:"Rodent",
          more:'#',
          content:'Mice and rats are damage to your property and spread disease. For this purpose, you have to ',
          icon:Rodent
        },
        {
          name:"Termite",
          more:'#',
          content:'Termites are most arrive in during the spring and summer month. Termites sometimes are cryptic',
          icon:Termite
        },{
          name:"Snake",
          more:'#',
          content:'The behavior of the snakes is the vital factor to grasp is that almost all snakes are non-venomous',
          icon:Snake
        },{
          name:"Mosquito",
          more:'#',
          content:'Mosquitoes are a slender long-legged fly with aquatic larvae.Most of the Mosquitoes find at the',
          icon:Mosquito
        },
        {
          name:"Mosquito Mesh",
          more:'#',
          content:'We provide all types of Mosquito Meshes like Open type mosquito net, Shutter type mosquito net..',
          icon:MosquitoMesh
        },{
          name:"RESIDENTIAL",
          more:'#',
          content:'Residential Pest conteol services in Hyderabad.Most of the Pest find',
          icon:RESIDENTIAL
        },{
          name:"INDUSTRIAL",
          more:'#',
          content:'We provide all types of INDUSTRIAL PEST CONTROL SERVICES',
          icon:INDUSTRIAL
        },
      ],
      controlAreas:[
        {
          name:"Industrial pest control",
          more:'#',
          content:'We eliminate all types of pest Control like mosquitoes, rodents, termites ',
          icon:industry
        },{
          name:"commercial pest control",
          more:'#',
          content:'We eliminate all types of pest Control like mosquitoes, rodents, termites,',
          icon:cmmerical
        },{
          name:"RESIDENTAL pest control",
          more:'#',
          content:'We eliminate all types of pest Control like insect control, termite control,',
          icon:residential
        },
      ],
      footerSlides:[
        {
          name:"Industrial pest control",
          more:'#',
          content:'We eliminate all types of pest Control like mosquitoes, rodents, termites ',
          icon:industry
        },{
          name:"commercial pest control",
          more:'#',
          content:'We eliminate all types of pest Control like mosquitoes, rodents, termites,',
          icon:cmmerical
        },{
          name:"RESIDENTAL pest control",
          more:'#',
          content:'We eliminate all types of pest Control like insect control, termite control,',
          icon:residential
        },
      ]
    }
  }
  render(){
    var cards = this.state.cards;
    var controlAreas = this.state.controlAreas;
    return (
      <div className="Fact-container">
        <div className="swiper-container">
          <img src={homeswiper} className="swiper-image"alt=""/>
          <span  className="p-a top text-shadow">
            <div>We are Pest Control</div>
            <div>we Remove pests </div>
          </span>
        </div>
        <div className="desc  app-content ash">
          <div>
            <img className="f-r" src={fr} alt="fr"/>
            <div className="text-justify">
              <h1><b>Pest Control Services In Hyderabad</b></h1>
              <p>My Mark Pest Control Hyderabad provides Best Pest control in Hyderabad and Secunderabad to residential and commercial properties. All our pest control services in Hyderabad are performed by well trained and expert technicians. We keep from top to bottom standards of quality and safety. My Mark Pest Control Hyderabad takes every protection to ensure your home and business is pest free. We offer guaranteed pest control in Hyderabad and Secunderabad for the residential and commercial property. We are the Leading Pest Control Services Provider in Hyderabad for any kinds of Information call us at 9949700744. Or Mail us at : mymarkpest@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="cards-component app-content">
          {cards.map((ele,i)=> <Card content={ele} key={i}/> )} 
        </div>
        <div className="app-content text-center">
          <h2>OUR <br className="title_br" /> Pest control Areas</h2>
          <h6>Great & Awesome Works</h6>
          <div className="row latest_news_inner">
            {controlAreas.map((ele,i)=><ControlArea content={ele} key={i}/>)}
            
          </div>
        </div>
        <div className="app-content text-justify">
          <div className="text-center">
              <h2>PEST CONTROL <br className="title_br" /> SERVICES</h2>
              <h6>PEST CONTROL HYDERABAD, SECUNDERABAD AND KUKATPALLY <br className="sub_br" /></h6>
          </div>
          <p>We are the Leading Pest Control Services in Hyderabad. We provide all types of Pest removal services in Hyderabad. </p>
          <p>When My Mark Pest Control Services Hyderabad began their pest control business in Hyderabad and secandrabad decade ago, they had two goals in mind: To provide quality pest control in Hyderabad and deliver greater customer service. Today, over a period later, My Mark Control Hyderabad is still faithful to that mission. It is the name you can hope to protect your commercial or home in contrast to pests like termite treatment, rodent control, bed bugs treatment, birds control, mosquito’s control, cockroach treatment, ants control treatment and Bird Mites treatment etc.</p>
          <p>As the trustworthy marketable pest control corporation in Hyderabad. My Mark Pest Control Hyderabad has provided peace of mind against pests ever since we opened our doors for business from last 18 years. We are known as the Best Pest Control Services in Hyderabad because of our products and loftier services. We provide services all over Hyderabad and specifically in areas like kukatpally, KPHB Colony and Hi-tech City and nearby locations.</p>
          <p>Our Aim is to provide a good pest control services in Hyderabad, kukatpally, KPHB Colony and Hi-tech City and Secandrabad with better-quality client satisfaction. We have worked strongly with our clients to make guaranteed a positive outcome and amazing pest control service in Hyderabad, kukatpally, KPHB Colony and Hi-tech City and Secandrabad.</p>
          <p>We provide an extensive range of services to attack the usually found pests upsetting public health (such as Terminates, cockroaches, ants, pigeons, bed-bugs etc.) in your locations.</p>
          <p>Our pest control services in Hyderabad are deliberate observance these in mind for both residential, Industrial and commercial locations.</p>
          <p>Our Pest Control Services Hyderabad is protective, the atmosphere warm and eco-friendly and has no harmful on human way of life. We are a team of Pest Control Professional in Hyderabad, kukatpally, KPHB Colony and Hi-tech City and Secandrabad. Offering Pest Control services to Home, Office buildings, Industrial sectors, Hotels and Commercial Hubs of Hyderabad and Secandrabad. Our Pest Control Services in Hyderabad are real and inexpensive.</p>
          <p>We provide Termite Pest control in Hyderabad, Cockroach Pest control Services in Hyderabad, Bedbug Pest Removal Services in Hyderabad, Rodent Pest Control in Hyderabad, Spider Pest Control Services in Hyderabad, Ants control services in Hyderabad. We provide Mosquito Mesh Services and Mosquito Mesh products in Hyderabad.</p>
          <p>With our 24-hour reaction time, we have a tendency to make sure you can have your pest control issue addressed immediately. We have a tendency to create pest protection simple and hassle-free, providing you with the simplest client service expertise within the business. </p>
          <p>If you want any type of information regarding the pest control services to call us on 9949700744 or Click on below.</p>
        </div>
        <section className="app-content">
            <div className="">
                <div className="work_content">
                    <div className="main_c_title text-center">
                        <h2>Contact <br className="title_br" /> us</h2>
                        <h6>Pest Control Services in Hyderabad</h6>
                    </div>
                    <p>You have Any pest problem We have Solution For All Pests. For More details call us on 9949700744 or Mail : mymarkpest@gmail.com</p>
                    <a className="btn" href="#">Call now</a>
                </div>
            </div>
        </section>
        {/* <Control/ledCarousel /> */}
        {/* <DemoCarousel slider={this.state.footerSlides}/> */}

        {/* <FooterBottom />
        <FooterTop /> */}
        {/* <FooterMiddle /> */}
      </div>
    );
  }
}

export default HomeComponent;
