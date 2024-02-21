import React from "react";
// import { useState } from "react";
export default function Navbar(){
 const Pages = [
    {name: "Home" , nav: "#"},
    {name: "About" , nav: "#"},
    {name: "Process" , nav: "#"},
    {name: "Portfolio" , nav: "#"},
    {name: "Contact me", nav:"#"}
 ] 
//  const [open, setOpen] = useState(false);
    return(
        <div className="shadow-md w-full fixed top-0 left-0 z-10 h-[10%] ">
           <div className="flex"><img src="../images/logo.png" className="w-[8%] h-[8%] md:w-[15%] md:h-[15%] " alt="not found"/>
            <ul className="flex justify-between m-auto w-[60%]  ">
            {Pages.map((data)=>
    (
        <li key={data.name}>
            <a href={data.nav}>{data.name}</a>
            </li>
    ))}
            
            </ul>
           </div>
        </div>
    )
}
