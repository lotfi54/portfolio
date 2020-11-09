import React from 'react'
import Marquee from "react-simple-marquee";
const Articles = () => {
    return (
       
        <div className="  w-full ">
    
            <div className="flex flex-wrap justify-center mt-32   z-0 text-white text-8xl">
            <Marquee 
            speed={2} // Speed of the marquee (Optional)
            direction= "left-right"
           
            style={{
              height: 350,
              
              
            }}
          >
          
            <div className="text-white text-8xl  uppercase font-mosk4">Work - <span className="stroker">WORK</span> - WORK - <span className="stroker">WORK </span>- WORK - <span className="stroker">WORK </span> - </div>
            
          </Marquee>
    
          
</div>
        </div>
    )
}

export default Articles
