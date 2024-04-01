import React from "react";
import { useState } from "react";

export default function Contact(){
   const [data, setData] = useState({
    fullname: "",
    checked: true,
    area:""
   })

//    .container {
// 	max-width:400px;
// 	width:100%;
// 	margin:0 auto;
// 	position:relative;
// }

    return(
        <div className="antialiased bg-gray-100">
  <div className="flex w-full min-h-screen justify-center items-center">
    <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-green-700 w-full max-w-4xl p-5 sm:p-8 rounded-lg shadow-lg text-white overflow-hidden">
      <div className="flex flex-col md:flex-1 space-y-8 justify-between">
        <div>
          <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
          <p className="pt-2 text-green-100 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestiae cupiditate nulla facere</p>
        </div>
        <div className="flex flex-col space-y-4 sm:space-y-6">
          <div className="inline-flex space-x-2 items-center">
            <ion-icon name="call" className="text-green-300 text-xl"></ion-icon>
            <span>+91 1234567890</span>
          </div>
          <div className="inline-flex space-x-2 items-center">
            <ion-icon name="mail" className="text-green-300 text-xl"></ion-icon>
            <span>support@test.com</span>
          </div>
          <div className="inline-flex space-x-2 items-center">
            <ion-icon name="location" className="text-green-300 text-xl"></ion-icon>
            <span>BKC, Mumbai</span>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute invisible md:visible z-0 w-40 h-40 bg-green-400 rounded-full -right-28 -top-28"></div>
        <div className="absolute invisible md:visible z-0 w-40 h-40 bg-green-400 rounded-full -left-28 -bottom-16"></div>
        <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-full">
          <form className="flex flex-col space-y-4">
            <div>
              <label for="" className="text-sm">Your Name</label>
              <input type="text" placeholder="Name" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"/>
            </div>
            <div>
              <label for="" className="text-sm">Your Email</label>
              <input type="email" placeholder="Email" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"/>
            </div>
            <div>
              <label for="" className="text-sm">Your Message</label>
              <textarea type="email" placeholder="Message" rows="4" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-green-300"></textarea>
            </div>
            <button className="inline-block self-end bg-green-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}