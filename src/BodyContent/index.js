import React from 'react';
import HomeComponent from '../HomeComponent';
import {
  Switch,
  Route
} from "react-router-dom";
import AboutUs from '../aboutUs';
import Service from '../services';
import ContactUs from '../contactUs';
import termswiper from '../images/anona-slider-3.jpg';
import termcontentImage from '../images/pre-cons-right.jpg';
import cockroachpestswiper from '../images/main_german-cockroach-banner-image-desktop.jpg';
import cockroachpestcontentImage from '../images/pre-cons-right.jpg';
import bedbugswiper from '../images/natural-ways-to-get-rid-of-bed-bugs.jpg';
import bedbugcontentImage from '../images/pre-cons-right.jpg';
import antswiper from '../images/ant-banners.jpg';
import antcontentImage from '../images/pre-cons-right.jpg';
import beeswiper from '../images/honey-bee.jpg';
import beecontentImage from '../images/pre-cons-right.jpg';
import spiderswiper from '../images/27TB-spiders-promo-facebookJumbo.jpg';
import spidercontentImage from '../images/pre-cons-right.jpg';
import Rodentswiper from '../images/rb.jpg';
import RodentcontentImage from '../images/pre-cons-right.jpg';
import snakeswiper from '../images/snakes.jpg';
import snakecontentImage from '../images/pre-cons-right.jpg';
import Mosquitoswiper from '../images/mosquito20banner.jpg';
import MosquitocontentImage from '../images/pre-cons-right.jpg';
import Mosquitomeshswiper from '../images/272-0648replaceNetting.jpg';
import MosquitomeshcontentImage from '../images/pre-cons-right.jpg';
import residentialswiper from '../images/banner-bg.jpg';
import residentialcontentImage from '../images/pre-cons-right.jpg';
import Commericalswiper from '../images/slider3.jpg';
import CommericalcontentImage from '../images/pre-cons-right.jpg';
import industrialswiper from '../images/slider4.jpg';
import industrialcontentImage from '../images/pre-cons-right.jpg';
// import termswiper from '../images/';
// import termcontentImage from '../images/pre-cons-right.jpg';
// import termswiper from '../images/';
// import termcontentImage from '../images/pre-cons-right.jpg';
class BodyContent extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      services :{
        termitepestcontrolservices:{
          swiperImage:termswiper,
          swiperMainHeadding:'You have Termite Pest Control Problem We Remove',
          swiperHeadding:'Termite Control',
          textHeader:'Termite Pest Control Services in Hyderabad',
          textContent:['We are the leading Termite Pest Control Services in Hyderabad. We provide Different types of techniques for the termite’s control. We are using the 100% Eco- friendly Chemicals only. Termites are eusocial insects. Termites are most arrive in during the spring and summer month. Termites sometimes are cryptic, that means that they do not come out into the open tough to find. They’re usually known as the "silent destroyer" because they will be in secret activity and thriving in your home or yard without any immediate signs of harm.'],
          contentImage:termcontentImage                                                                                                                                                                                         
        },
        cockroachpestcontrolservices:{
          swiperImage:cockroachpestswiper,
          swiperMainHeadding:'We stop your pest',
          swiperHeadding:'Cockroach Control',
          textHeader:'Cockroach Pest Control services in Hyderabad',
          textContent:["Cockroach Pest Control in Hyderabad. Shield Your Home and Health. The cockroach is characterized by a two-dimensional oval body, long filiform antennae, and a shining black or brown tough cover. Cockroaches are the crawling pests. If you've got seen one cockroach in your property, you'll be able to take care of their area unit a lot of around. They quite common pests and are known to transfer several diseases. To shield your home and health select our cockroach pest control in Hyderabad. We are the leading Cockroach Pest Control services provider in Hyderabad. Control of Cockroach, we have to use modern technologies and different methods by using these methods no problem to the home, children, and pets. We use the 100% safe chemicals."],
          contentImage:cockroachpestcontentImage
        },
        bedbugpestcontrolservices:{
          swiperImage:bedbugswiper,
          swiperMainHeadding:'We Element your Pest',
          swiperHeadding:'Bed Bug Control',
          textHeader:'Bed Bug Pest Control Services in Hyderabad',
          textContent:["Bed bugs have small, flat, oval-shaped bodies. They are wingless. Bed Bug is crawling Pest. Bed parts and folded areas are the best place to find Bedbugs. Most of the Bedbugs arrived at the house in the month of August and September. Getting eliminate bed bugs is disagreeable. Moving out a troubled pad won't solve the matter.","At our pest control, our team of bed bug consultant’s are a unit extremely trained and easily eliminates your Bedbugs. We use an advanced technology to eliminate the bedbugs these technology is creating the eco-friendly system in the home. We are the leading pest control company in Hyderabad. By using the bed bug control you have to eliminate your Bedbugs. If you find any bedbug in your home or any place don’t touch them just give a call us we eliminate your bedbugs in 24 hours time.","By using the modern technologies and highly qualified expert we element your Bedbugs for any kind of information calls us at 9949700744. Or Mail us at: mymarkpest@gmail.com"],
          contentImage:bedbugcontentImage
        },
        antpestcontrolservices:{
          swiperImage:antswiper,
          swiperMainHeadding:'Put a stop to it',
          swiperHeadding:'Ants Control',
          textHeader:'Ants Control Services in Hyderabad',
          textContent:["Ant is a small insect typically having a sting. Ant is a crawling pest. Ants are a social insect that lives in colonies. Ants can find near the foods means the best place to find Ants is the Kitchen room. By using the Ants control you have to eliminate the Ants throughout the home If you have ants in your home Ants can create the health Problem. During the summer season, Ants find in homes. By using the chemicals we have to eliminate the Ants. we are using the Only 100% safe chemicals and we create the eco-friendly nature.","If you have any Ants control problem in your house or any place contact us within 24 hrs time we eliminate your Ants for any kind of information calls us at 9949700744. Or Mail us at: mymarkpest@gmail.com"],
          contentImage:antcontentImage
        },
        beepestcontrolservices:{
          swiperImage:beeswiper,
          swiperMainHeadding:'We stop your pest',
          swiperHeadding:'BEE Control',
          textHeader:'Bee Pest Control Services in Hyderabad',
          textContent:["Bees are flying insects closely related to wasps. Most of the bees find at white clover, goldenrod, and milkweed. By using the bee pest control we have to eliminate bees the most Seasons for bees in spring with the warm weather. We are providing the quality bee pest control in Hyderabad.","Bees have 5 eyes - 2 giant compound eyes and 3 straightforward eyes and may see all colors except the color red. That and their sense of smell facilitate them notice the flowers they have to gather spore. Spore is a crucial food supply for bees. Most bees have specialized feathery body hairs that facilitate within the assortment of spore.","If you have any Bee Pest control problem in your house or any place contacts us within 24 hrs time we eliminate your bees for any kind of information calls us at 9949700744. Or Mail us at: mymarkpest@gmail.com"],
          contentImage:beecontentImage
        },
        spiderpestcontrolservices:{
          swiperImage:spiderswiper,
          swiperMainHeadding:'We stop your pest ',
          swiperHeadding:'Spider Control',
          textHeader:'Spider Pest Control Services in Hyderabad',
          textContent:["Spider Pest Control Services in Hyderabad. spiders, in contrast to insects, have solely 2 body segments rather than three: an amalgamated head associate degreed thorax and an abdomen. Spiders are crawling pests it has 2 body segments, 8 legs, no adduction mouth components and no wings. Spiders square measure found everywhere the planet. Most of the Spiders live in Spiders live in hidden spaces. we are the leading Spider pest Control in Hyderabad.","Keep your surrounding clean, Dispose all waste from the premise, and Keep your garden area clean then you Control Spiders. If you have control your Spiders you have to eliminate your disease like skin problems caused by spiders. Spiders live in hidden spaces and undisturbed areas, like behind a bookshelf.etc...Spiders are enter in to the house in the season of late summer and early autumn.","If you have any Spider pest Control problem in your House or any place calls us at 9949700744. Or Mail us at: mymarkpest@gmail.com we will reach within 24 hours."],
          contentImage:spidercontentImage
        },
        Rodentpestcontrolservices:{
          swiperImage:Rodentswiper,
          swiperMainHeadding:'We stop your Rodent',
          swiperHeadding:'Rodent Control',
          textHeader:'Rodent Pest Control Services in Hyderabad',
          textContent:["Rodent Pest Control Services in Hyderabad. Rodent Pest Control Means It has three types of pests Mice, Rats, and squirrels. Mice and rats are damage to your property and spread disease. For this purpose, you have to eliminate your rats and mice. Most of the rats find at Storerooms. We provide good pest control services to the customers.","Rats are unit active largely at nighttime. They need poor visual sense, however, they create up for this with their keen senses of hearing, smell, taste, and touch. Most of the rats find at Storerooms, pathways, obstacles, food and water, shelter, and options of their surroundings. They quickly discover and have a tendency to avoid new objects and novel foods. Thus, they usually avoid traps and baits for many days or additional following their initial placement. We are leading rodent pest control In Hyderabad.","If you have any Rat or Mice Pest Control problem in your House or any place calls us at 9949700744. Or Mail us at: mymarkpest@gmail.com we will reach within 24 hours. We are the best Rodent Pest Control Services in Hyderabad.."],
          contentImage:RodentcontentImage
        },
        snakepestcontrolservices:{
          swiperImage:snakeswiper,
          swiperMainHeadding:'We have solution',
          swiperHeadding:'You have Snake',
          textHeader:'Snake Pest Control Services in Hyderabad',
          textContent:["Snake Pest Control Services in Hyderabad. We provide best Pest Control Services in Hyderabad. We control your Snakes With in the 24 hours of time. By choosing the Snake pest Control you have to eliminate the Snakes from your house and avoid Problems.","The behavior of the snakes is the vital factor to grasp is that almost all snakes are non-venomous, and just about none of them are aggressive. That is, no snake bake can go up to you and attack you. Most can run, and a few can stand their ground, however if you permit the snake alone, it's going to leave you alone. that is however it works for many animals. Snakes board a good form of habitats. Some are nice climbers, some are aquatic. Some kill by venom, some by constriction. Some simply grab bugs and eat them. We are leading Snake pest Control services provider in Hyderabad. Most of the snakes lives in yard , under home or deck and swimming pool.","If you have any Snake Pest control problem in your house or any place contact us within 24 hrs time we eliminate your Snakes for any kind of information calls us at 9949700744. Or Mail us at: mymarkpest@gmail.com"],
          contentImage:snakecontentImage
        },
        Mosquitopestcontrol:{
          swiperImage:Mosquitoswiper,
          swiperMainHeadding:'We have solution',
          swiperHeadding:'You have Mosquito',
          textHeader:'Mosquito Pest Control Services in Hyderabad',
          textContent:["Mosquitoes are a slender long-legged fly with aquatic larvae. Most of the Mosquitoes find at the Home surroundings like street revivers, Street Roads and Drainages. So if you clean your Home and street then easily to Avoid Mosquito’s. By Mosquitoes you face Several problems like Malaria, Yellow Fever , Canine Heartworm etc.. So eliminate your Mosquitoes then you eliminate Disease. If you are looking for mosquito pest control services in Hyderabad contact us immediately.","If you have any Mosquito pest Control problem in your House calls us at 9949700744. Or Mail us at: mymarkpest@gmail.com our Team will Contact you."],
          contentImage:MosquitocontentImage
        },
        Mosquitomeshservices:{
          swiperImage:Mosquitomeshswiper,
          swiperMainHeadding:'By Mosquitio Mesh',
          swiperHeadding:'Avoid Mosquitos',
          textHeader:'Mosquito Mesh Services in Hyderabad',
          textContent:["Mosquito Mesh can be made from cotton, polyester or nylon. By using the Mosquito Mesh we have to eliminate mosquitoes. We are providing the Mosquito Mesh Services in Hyderabad if anybody wants Mosquito Mesh Services Contact us on immediately.","We are leading Pest Control services provider in Hyderabad. We provide all types of Mosquito Meshes like Open type mosquito net, Shutter type mosquito net, Rollup mosquito net, Sliding mosquito net, window mosquito net etc...","If you are looking for mosquito mesh Services in Hyderabad calls us at 9949700744. Or Mail us at: mymarkpest@gmail.com. Our Team will call to you within 24 hours Time"],
          contentImage:MosquitomeshcontentImage
        },
        residentialpestcontrol:{
          swiperImage:residentialswiper,
          swiperMainHeadding:'Residential Pest control',
          swiperHeadding:'Residential Pest control',
          textHeader:'Residential Pest control Services in Hyderabad',
          textContent:["Residential Pest control in Hyderabad. My Mark pest Control Services provides the best Residential Pest control in Hyderabad. We eliminate all types of pest Control like insect control, termite control, cockroach control, Spider control, rodent control services, and Mosquito Control services in Hyderabad. If you are looking for Residential pest Control Services contact us.","We are the Leading Pest Control Services Provider In Hyderabad. We provide all types of pest control services. we use only Eco friendly Products to elements the Pests. If you are clean your kitchen and store rooms then you avoid pest problem or else you face so much problem with pests.","By using the modern technologies and highly qualified expert we eliminate your pests for any kind of information call us at 9949700744. Or Mail us at: mymarkpest@gmail.com"],
          contentImage:residentialcontentImage
        },
        Commericalpestcontrol:{
          swiperImage:Commericalswiper,
          swiperMainHeadding:'Pest Control Services',
          swiperHeadding:'Commercial',
          textHeader:'Commercial Pest Control Services in Hyderabad',
          textContent:["Commercial Pest Control in Hyderabad. My Mark pest Control Services provides the best Commercial Pest control in Hyderabad. We eliminate all types of pest Control like mosquitoes, rodents, termites, Fly Control and other insects. If you are looking for Commercial Pest Control Services contact us.","Commercial Pest Control Means we have to avoid pest in the commercial areas like Schools, Colleges, Hospitals, offices etc...","By using the modern technologies and highly qualified technician we eliminate your pests and clean your Commercial Areas for any kind of information call us at 9949700744. Or Mail us at: mymarkpest@gmail.com"],
          contentImage:CommericalcontentImage
        },
        industrialpestcontrol:{
          swiperImage:industrialswiper,
          swiperMainHeadding:'Pest Control Services',
          swiperHeadding:'Industrial',
          textHeader:'Industrial Pest Control Services in Hyderabad',
          textContent:["Industrial Pest Control in Hyderabad. My Mark pest Control Services provides the best Industrial Pest control in Hyderabad. We eliminate all types of pest Control like mosquitoes, rodents, termites and other insects. If you are looking for Industrial pest Control Services contact us.","In The Industrial areas Store rooms are the most pest affected areas so if you clean your Store rooms you avoid pests.","By using the modern technologies and highly qualified technician we eliminate your pests and clean your Industry for any kind of information call us at 9949700744. Or Mail us at: mymarkpest@gmail.com"],
          contentImage:industrialcontentImage
        },
        // {
        //   swiperImage:'',
        //   swiperMainHeadding:'',
        //   swiperHeadding:'',
        //   textHeader:'',
        //   textContent:'',
        //   contentImage:''
        // },
      }
    }
  }
  render(){
    var service = this.state.services;
    return (
      <div className="BodyContent">
          <Switch>
            <Route path="/" exact><HomeComponent /></Route>
            <Route path="/aboutus"><AboutUs /></Route>
            <Route path="/contactus"><ContactUs /></Route>
            <Route path="/services/termitepestcontrolservices"><Service  Service={service.termitepestcontrolservices}/></Route>
            <Route path="/services/cockroachpestcontrolservices"><Service Service={service.cockroachpestcontrolservices} /></Route>
            <Route path="/services/bedbugpestcontrolservices"><Service Service={service.bedbugpestcontrolservices} /></Route>
            <Route path="/services/antpestcontrolservices"><Service  Service={service.antpestcontrolservices}/></Route>
            <Route path="/services/beepestcontrolservices"><Service Service={service.beepestcontrolservices} /></Route>
            <Route path="/services/spiderpestcontrolservices"><Service Service={service.spiderpestcontrolservices} /></Route>
            <Route path="/services/Rodentpestcontrolservices"><Service  Service={service.Rodentpestcontrolservices}/></Route>
            <Route path="/services/snakepestcontrolservices"><Service Service={service.snakepestcontrolservices} /></Route>
            <Route path="/services/Mosquitopestcontrol"><Service Service={service.Mosquitopestcontrol} /></Route>
            <Route path="/services/Mosquitomeshservices"><Service  Service={service.Mosquitomeshservices}/></Route>
            <Route path="/services/residentialpestcontrol"><Service Service={service.residentialpestcontrol} /></Route>
            <Route path="/services/Commericalpestcontrol"><Service Service={service.Commericalpestcontrol} /></Route>
            <Route path="/services/industrialpestcontrol"><Service Service={service.industrialpestcontrol} /></Route>
          </Switch>
      </div>
    );
  }
}

export default BodyContent;
