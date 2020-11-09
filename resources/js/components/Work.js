import React,{useEffect} from 'react'
import gsap,{TweenMax} from "gsap";
import Marquee from "react-simple-marquee";
const Work = () => {

    


    return (
        <div className="bg-black absolute w-full ">
    
            <div className="flex flex-wrap justify-center mt-32   z-0 text-white text-8xl">
            <Marquee 
            speed={2} // Speed of the marquee (Optional)
            direction= "left-right"
           
            style={{
              height: 150,
              
              
            }}
          >
          
            <div className="text-white text-8xl  uppercase font-mosk4">Work - <span className="stroker">WORK</span> - WORK - <span className="stroker">WORK </span>- WORK - <span className="stroker">WORK </span> - </div>
            
          </Marquee>
    
          
</div>
        <div className="flex flex-wrap justify-center mt-10  text-white text-8xl ">
            <div className="card  text-center  xl:w-7/7  xl:h-56 text-white">
            Hello
            </div>

            <div className="card text-center text-white  xl:w-7/7 xl:h-56">
            Hello
            </div>

            <div className="card text-center text-white  xl:w-7/7 xl:h-56">
            Hello
            </div>

            <div className="card text-center text-white  xl:w-7/7 xl:h-56">
            Hello
            </div>
            <div className="card text-center text-white  xl:w-7/7 xl:h-56">
            Hello
            </div>

            <div className="card text-center text-white  xl:w-7/7 xl:h-56">
            Hello
            </div>

            </div>
            </div>
        
    )
}

export default Work
