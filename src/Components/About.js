import React from "react";
import { motion } from "framer-motion";

export default function About(){
    return(
        <div id="about" className="mt-[10%] justify-between flex mr-40 ml-40 mb-80">
           
            <div className="w-[50%] md: w-[35%]">
                <h1 className="text-5xl ">Hello my name is <br/> <span className="text-purple-800 text-center" >Tsedenawit</span></h1>
                <motion.a
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.8 }}
  style={{ x: 100 }}
/>
            <h4 className=" ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </h4>
        </div> 
        <motion.div
  animate={{
    x: 0,
    backgroundColor: "black",
    boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
    position: "fixed",
    transitionEnd: {
      display: "none",

    },
  }}
/>
       { window.screen.width > '768' && <div className=" ">
                <img src="../images/pin.jpg" className="w-fit h-[500px] md: w-[50%] " />
                
            </div>}
        </div>
    )
}