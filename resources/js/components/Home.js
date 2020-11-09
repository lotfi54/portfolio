import React,{useEffect,useRef} from 'react'
import ArcText from 'arc-text';
import ReactDOM from "react-dom";
import * as THREE from "three";
import Photo from '../../images/bannerport.jpg'
import Flag from './Flag'
import Marquee from "react-simple-marquee";
import CircleType from 'circletype';

import { BsArrowDown } from "react-icons/bs";
import gsap,{TimelineMax,Power0} from "gsap";

const Home = () => {


  useEffect(() => {

 


    const circleType = new CircleType(document.getElementById('rotated'));
    circleType.radius(80);
  }, [])
  


    return (
      <div className="header">
     
     <div className="flex flex-col  sm:flex-col w-full lg:flex-col xl:flex-row min-h-screen">
     <div className="flex flex-col relative w-full justify-center items-center  sm:w-full md:w-full lg:w-full xl:w-4/12">
   
     
     <div className="name text-5xl  xl:text-center sm:text-4xl xl:text-6xl md:text-5xl lg:text-5xl font-mosk  z-10"> 
       Bouraine Lotfi
 </div> 
 <div className="mx-10 text-2xl text-center  xl:text-2xl xl:text-justify sm:text-2xl leading-10 md:text-2xl  lg:text-center lg:text-2xl font-mosk text-white z-10"> 
 <p>Bonjour, je m'appelle Lotfi Bouraine, je suis un jeune développeur qui vie prés du luxembourg  et qui aime combiner différentes technologies pour édifier des applications modernes. J'aime égalemnt le design qu'il soit web ou graphique et je m'inspire et crée des designs qui facilite l'expérience utilisateur </p> 
 </div> 
 </div>
     <div className="falg absolute">
     <Flag/>
    </div>
   
    <div class="circular-text">
    <span id="rotated" className="font-mosk">
    Voir mes projets - Voir mes projets - Voir mes projets - Voir mes projets - 
    </span>
</div>
<div class="arrow">
    <BsArrowDown/>
</div>
   </div>

<div className="from-red-600 fixed text-white">Hello</div>


   </div>
    
    )
}

export default Home
