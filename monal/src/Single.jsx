import React from "react";
import Image from './components/assets/images/Banner.jpg';
import image1 from './components/assets/images/B1.jpg';
import image2 from './components/assets/images/B2.jpg';
import image3 from './components/assets/images/B3.jpg';
import image4 from './components/assets/images/M1.jpg';
import image5 from './components/assets/images/M2.jpg';
import image6 from './components/assets/images/M3.jpg';

export default function Single() {
    return (
        <section className="text-black body-font overflow-hidden">
  <div className="max-w-[1240px] px-2 py-24 mx-auto">
    <div className="lg:full mx-auto flex flex-wrap justify-between">
      <div className="lg:w-2/3 w-full lg:pr-10 mb-6 lg:mb-0 ">
        <h1 className="text-6xl text-[#d70101] title-font font-medium mb-10">MONAL</h1>
        <p className="text-3xl ">$$ affordable Restaurant.</p>
        <p className="text-3xl">4.3(18549) $$</p>
        <p className="text-3xl">Plaza Liberty Park and Ride Plaza, Liberty Chowk, Round About, Gulberg III, Lahore, Pakistan Sunday: 10 AM-12AM</p>
        <p className="text-3xl">SMTWTFSS</p>
        <p className="text-3xl text-[#d70101]">+92 42 35789824</p>
        <p className="text-3xl text-[#d70101]">hhtp://lahore.themonal.com/</p>
      </div>
        <div className="lg:w-1/3 w-full lg:h-auto ">
            <img alt="ecommerce" className="h-96 w-full object-cover object-center rounded mb-5" src={Image} />
            <div className="flex justify-between">
            <img alt="ecommerce" className="w-24 object-cover object-center rounded" src={image1} />
            <img alt="ecommerce" className="w-24 object-cover object-center rounded" src={image2} />
            <img alt="ecommerce" className="w-24 object-cover object-center rounded" src={image3} />
            </div>
        </div>
    </div>
  </div>
  <div className="max-w-[1240px] mx-auto px-2 py-24">
    <h1 className="text-6xl text-[#d70101] title-font font-medium mb-10">ABOUT MONAL</h1>
    <p className="text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque beatae facere repellendus possimus minus, rerum officia fuga iusto animi quasi. <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque nisi culpa rem similique porro nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias harum reiciendis quos eaque rerum ea totam alias et laborum impedit!
    </p>
  </div>
  <h1 className="max-w-[1240px] mx-auto text-6xl text-[#d70101] title-font font-medium mb-10">MENU</h1>
  <div className="w-full p-2 bg-[#d70101]">
  <section className="max-w-[1240px] mx-auto">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4" src={image4} />
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4" src={image5} />
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4" src={image6} />
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4" src={image4} />
        </div>
      </div>
    </div>
  </div>
</section>
  </div>
</section>
    )
}