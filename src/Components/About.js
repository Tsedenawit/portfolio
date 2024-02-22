import React from "react";


export default function About(){
    return(
        <div id="about" className="mt-[10%] justify-between flex mr-40 ml-40 mb-80">
           
            <div className="w-[50%] md: w-[35%]">
                <h1 className="text-5xl ">Hello my name is <br/> <span className="text-purple-800 text-center" >Tsedenawit</span></h1>

            <h4 className=" ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </h4>
        </div> 
        <div className="float-end  ">
                <img src="../images/pin.jpg" className="w-fit h-[500px] md: w-[50%] " />
                
            </div>
        </div>
    )
}