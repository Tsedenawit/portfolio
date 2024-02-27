import React from "react";

export default function Process(){
    return(
        <div id="pro" className="flex" >
          <div className=" ">
                <img src="../images/pin.jpg" className="w-fit h-[500px] md: w-[50%] " />
                
            </div>
        <div className="flex">
      <div className="bg-white p-8 rounded-lg drop-shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Card Title</h2>
        <p className="text-gray-600">This is a simple card with box shadow.</p>
    </div>
    <div className="bg-white p-8 rounded-lg drop-shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Card Title</h2>
        <p className="text-gray-600">This is a simple card with box shadow.</p>
    </div>
    </div>
    <div className="flex">
       <div className="bg-white p-8 rounded-lg drop-shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Card Title</h2>
        <p className="text-gray-600">This is a simple card with box shadow.</p>
    </div>
    <div className="bg-white p-8 rounded-lg drop-shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Card Title</h2>
        <p className="text-gray-600">This is a simple card with box shadow.</p>
    </div> 
    </div>
        </div>
    )
}