import React from "react";
import { NavLink } from "react-router-dom";
import Data from "./Data";
import Card from "./Card";

export default function Cuisines() {
    return (
        <section class="text-gray-600 body-font">
    <div class="max-w-[1248px] py-10 mx-auto ">
        <h1 className="pl-8 md:text-[50px] text-[#d70101]">Popular Cuisines</h1>
        <p className="pl-8 md:flex md:items-center text-xl">On Top for their appetizing <span className=" md:ml-2 text-[#d70101] text-xl">Taste</span></p>
    <div class="md:flex flex-wrap m-4 justify-between">
      { 
        Data.map((val,ind) => {
          return <Card key={ind} title={val.c_title} pic={val.cuisinepic} />
        })
      }
    </div>
    <button class="text-black text-2xl w-full md:text-right px-8"><NavLink to="/menu">see more</NavLink></button>
  </div>
</section>
    )
}