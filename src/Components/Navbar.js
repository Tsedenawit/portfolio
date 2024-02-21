import React from "react";
// import { useState } from "react";
export default function Navbar(){
 const Pages = [
    {name: "Home" , nav: "#"},
    {name: "About" , nav: "#"},
    {name: "Process" , nav: "#"},
    {name: "Portfolio" , nav: "#"}
 ] 
//  const [open, setOpen] = useState(false);
    return(
        <div className="shadow-md w-full fixed top-0 left-0 z-10 h-[10%] ">
           <div><img src="../Images/logo.png" alt="not found"/></div>
            <ul className="flex justify-between m-auto w-[60%]  ">
            {Pages.map((data)=>
    (
        <li key={data.name}>
            <a href={data.nav}>{data.name}</a>
            </li>
    ))}
    <li> <button>Contact Me</button></li>
            
            </ul>
           
        </div>
    )
}
