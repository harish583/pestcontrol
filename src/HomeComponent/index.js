import React from 'react';
import Card from '../Card';
import CardStyle from '../CardStyle';
import ControlArea from '../controlArea';
import ContactUsForm from '../contactUsForm';
import homeswiper from '../images/home-slider/slider-1.gif';
import cards from '../content/cards';
import controlAreas from '../content/controlAreas';
import DemoCarousel from './swiper';
// import cards from '../'
class HomeComponent extends React.Component {
  render(){
    return (
      <div className="Fact-container">
        <div className="swiper-container">
          <DemoCarousel slider={cards}/>
          {/* <img src={homeswiper} className="swiper-image"alt=""/> */}
          {/* <span  className="p-a top text-shadow">
            <div>We are Pest Control</div>
            <div>we Remove pests </div>
          </span> */}
        </div>
        <div className="app-content text-center">
          <h2>OUR <br className="title_br" /> Pest control Areas</h2>
          <h6>Great & Awesome Works</h6> 
          <div className="cards-styles-component">
            {controlAreas.map((ele,i)=> <CardStyle content={ele} key={i}/> )}
          </div>
        </div>
        
        <div className="app-content">
          <h2 className="text-center">Contact Us </h2>
          <div className="form-home">
            <ContactUsForm />
            <img src={homeswiper}/>
          </div>
        </div>
        <div className="cards-component app-content">
          {cards.map((ele,i)=> <Card content={ele} key={i}/> )} 
        </div>
        {/* <div className="app-content text-center">
          <h2>OUR <br className="title_br" /> Pest control Areas</h2>
          <h6>Great & Awesome Works</h6> */}
          {/* <div className="row latest_news_inner">
            {controlAreas.map((ele,i)=><ControlArea content={ele} key={i}/>)}
            
          </div> */}
        {/* </div> */}
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
        {/* <Control/ledCarousel /> */}
        <div className="app-content">
          <h2 className="text-center">OUR TESTIMONIALS</h2>
          <div className="owl-wrapper">
            <div className="owl-item">
                <div className="pest-testimonial">
                  <h3 className="title">Javed Akhter <span className="post">- Delhi</span></h3>
                  <div className="pest-testimonial-details">
                      Mourier Pest Control Service has been a pleasure because of their prompt and excellent services by a dedicated team. We have taken their pest control and anti-termite treatment services two years back and its still effective.Our experience has been great so far with them.
                  </div>
                </div>
            </div>
            <div className="owl-item" >
                <div className="pest-testimonial">
                  <h3 className="title">Taposhi Ghosh <span className="post">- Noida</span></h3>
                  <div className="pest-testimonial-details">
                      Best service by Gopal Rai. Mourier Pest Control gave very prompt response and services. They resolved our problem immediately and informed us along the way. I would like appreciate and recommend to required person.
                  </div>
                </div>
            </div>
            <div className="owl-item" >
                <div className="pest-testimonial">
                  <h3 className="title">Sadhna Joshi <span className="post">- Faridabad</span></h3>
                  <div className="pest-testimonial-details">
                      Excellent service! I am very happy with the service. Very much insect’s problem, so Mourier Pest Control agent removed it. Agent is very reassuring &amp; knowledgeable, excellent throughout. Only negative was agents arrival was slightly later than promised time.
                  </div>
                </div>
            </div>
            <div className="owl-item" >
                <div className="pest-testimonial">
                  <h3 className="title">Rajesh Chowdhury<span className="post">- Ghaziabad</span></h3>
                  <div className="pest-testimonial-details">
                      Mourier Pest Control provided Very good service and products are herbal. Great service would recommend for everyone to use. Mourier pest control also provided me with services until the matter is resolved.
                  </div>
                </div>
            </div>
          </div>
        </div>
        {/* <DemoCarousel slider={controlAreas}/> */}
      </div>
    );
  }
}

export default HomeComponent;
