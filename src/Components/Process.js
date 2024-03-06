import React from "react";

export default function Process(){
    return(
        <div className="flex justify-between ml-20 mr-20 mb-20">
            <div>
            <h2 className="text-center"><b>Work process</b></h2>
            <p className="max-w-80 max-h-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu,
            varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem 
            ac vestibulum. Suspendis imperdiet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu,
            varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem 
            ac vestibulum. Suspendis imperdiet,
            </p>
            </div>
        <div id="pro" className="grid grid-cols-2 gap-4 mb-100 pb-100 " >
      <div className="bg-white p-8 rounded-lg drop-shadow-lg row-span-4 col-span-1">
        <h2 className="text-2xl font-bold mb-4">Card Title</h2>
        <p className="text-gray-600">This is a simple card with box shadow.</p>
    </div>
    <div className="bg-white p-8 rounded-lg drop-shadow-lg row-span-4 col-span-1">
        <h2 className="text-2xl font-bold mb-4">Card Title</h2>
        <p className="text-gray-600">This is a simple card with box shadow.</p>
    </div>
       <div className="bg-white p-8 rounded-lg drop-shadow-lg row-span-4 col-span-1">
        <h2 className="text-2xl font-bold mb-4">Card Title</h2>
        <p className="text-gray-600">This is a simple card with box shadow.</p>
    </div>
    <div className="bg-white p-8 rounded-lg drop-shadow-lg row-span-4 col-span-1">
        <h2 className="text-2xl font-bold mb-4">Card Title</h2>
        <p className="text-gray-600">This is a simple card with box shadow.</p>
    </div> 
    </div>
       </div>
    )
}