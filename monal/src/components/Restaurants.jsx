import React from "react";
import pic1 from './assets/images/restaurant.jpg';
import { NavLink } from "react-router-dom";

export default function Restaurants() {
    return (
        <section class="text-gray-600 body-font">
    <div class="max-w-[1248px] py-10 mx-auto ">
        <h1 className="pl-8 md:text-[50px] text-[#d70101]">Featured Restaurants In Your City</h1>
        <p className="pl-8 md:flex md:items-center text-xl">On Top for their appetizing <span className=" md:ml-2 text-[#d70101] text-xl">Menu</span></p>
    <div class="md:flex flex-wrap m-4 justify-between">
      <div class="p-4 md:w-1/4 ">
        <div class="h-full flex flex-col justify-center items-center bg-[#d70101] border-2 border-gray-300 shadow-lg rounded-lg overflow-hidden">
          <img class="lg:h-80 md:h-36 md:w-64 w-80 object-cover object-center border-2 border-gray-100 border-t-0" src={pic1} alt="blog" />
          <div class="p-6">
            <h1 class="title-font text-3xl font-thin text-white mb-3">MONAL</h1>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/4 ">
        <div class="h-full flex flex-col justify-center items-center bg-[#d70101] border-2 border-gray-300 shadow-lg rounded-lg overflow-hidden">
          <img class="lg:h-80 md:h-36 md:w-64 w-80 object-cover object-center border-2 border-gray-100 border-t-0" src={pic1} alt="blog" />
          <div class="p-6">
            <h1 class="title-font text-3xl font-thin text-white mb-3">COCO CUBANO</h1>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/4 ">
        <div class="h-full flex flex-col justify-center items-center bg-[#d70101] border-2 border-gray-300 shadow-lg rounded-lg overflow-hidden">
          <img class="lg:h-80 md:h-36 md:w-64 w-80 object-cover object-center border-2 border-gray-100 border-t-0" src={pic1} alt="blog" />
          <div class="p-6">
            <h1 class="title-font text-3xl font-thin text-white mb-3">CAFE ZOUQ</h1>
          </div>
        </div>
      </div> 
    </div>
    <button class="text-black text-2xl w-full md:text-right px-8"><NavLink to="/menu">see more</NavLink></button>
  </div>
</section>
    )
}