import React from "react";
import pic1 from './assets/images/restaurant.jpg';

export default function Restaurants() {
    return (
        <section class="text-gray-600 body-font">
    <div class="max-w-[1248px] py-10 mx-auto ">
        <h1 className="pl-8 md:text-[50px] text-[#d70101]">Filtered Menus</h1>
        <p className="pl-8 md:flex md:items-center text-xl">On the basis of <span className=" md:ml-2 md:mr-2 text-[#d70101] text-xl">Price </span> and <span className=" md:ml-2 text-[#d70101] text-xl">Ratings</span></p>
    <div class="md:flex flex-wrap m-4 justify-between">
      <div class="p-4 md:w-1/4 ">
        <div class="h-full flex flex-col items-center bg-[#d70101] border-2 border-gray-300 shadow-lg rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 md:w-64 w-80 object-cover object-center border-2 border-gray-100 border-t-0" src={pic1} alt="blog" />
          <div class="p-5">
            <h1 class="title-font text-2xl font-thin text-white mb-3 text-center px-2">Veera 5 Thai and Chinese Restaurant</h1>
          </div>
          <span className="text-white text-xl">$</span>
          <p className="text-white pb-5">Rating 4.8</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 ">
        <div class="h-full flex flex-col items-center bg-[#d70101] border-2 border-gray-300 shadow-lg rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 md:w-64 w-80 object-cover object-center border-2 border-gray-100 border-t-0" src={pic1} alt="blog" />
          <div class="p-5">
            <h1 class="title-font text-2xl font-thin text-white mb-3 text-center px-2">The Kitchen Bistro-Boulangerie-Patissrie</h1>
          </div>
          <span className="text-white text-xl">$</span>
          <p className="text-white pb-5">Rating 4.8</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 ">
        <div class="h-full flex flex-col items-center bg-[#d70101] border-2 border-gray-300 shadow-lg rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 md:w-64 w-80 object-cover object-center border-2 border-gray-100 border-t-0" src={pic1} alt="blog" />
          <div class="p-5">
            <h1 class="title-font text-2xl font-thin text-white mb-3 text-center px-2">Lani's Kitchen Chinese Restaurant</h1>
          </div>
          <span className="text-white text-xl">$</span>
          <p className="text-white pb-5">Rating 4.8</p>
        </div>
      </div> 
    </div>
    <button class="text-black text-2xl w-full md:text-right px-8">see more</button>
  </div>
</section>
    )
}