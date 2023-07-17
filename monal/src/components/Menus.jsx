import React from "react";
import Data from "./Data";
import { NavLink } from "react-router-dom";
import Card1 from "./Card1";

export default function Restaurants() {
    return (
        <section class="text-gray-600 body-font">
    <div class="max-w-[1248px] py-10 mx-auto ">
        <h1 className="pl-8 md:text-[50px] text-[#d70101]">Filtered Menus</h1>
        <p className="pl-8 md:flex md:items-center text-xl">On the basis of <span className=" md:ml-2 md:mr-2 text-[#d70101] text-xl">Price </span> and <span className=" md:ml-2 text-[#d70101] text-xl">Ratings</span></p>
    <div class="md:flex flex-wrap m-4 justify-between">
        {
          Data.map((val,ind) => {
            return < Card1 key={ind} title={val.m_title} pic={val.menupic} currency={val.currency} rating={val.rating} />
          })
        }
    </div>
    <button class="text-black text-2xl w-full md:text-right px-8"><NavLink to="/menu">see more</NavLink></button>
  </div>
</section>
    )
}