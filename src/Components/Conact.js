import React from "react";
import { useState } from "react";

export default function Contact(){
   const [data, setData] = useState({
    fullname: "",
    checked: true,
    area:""
   })

    return(
        <div className="mt-150 pt-100">
            <form>
                <label>Firstname</label>
                <input 
                type="text"
                name="fullname"
                placeholder="Eg Adam Melaku"
                // value={}
                // onChange={}
                />
                <input
                type="text"
                name="area"
                placeholder="select"/>
            </form>
        </div>
    )
}