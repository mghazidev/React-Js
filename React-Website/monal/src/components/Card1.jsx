import React from 'react';

export default function Card1(props) {
  return (
    <div class="p-4 md:w-1/4 ">
        <div class="h-full flex flex-col items-center bg-[#d70101] border-2 border-gray-300 shadow-lg rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 md:w-64 w-80 object-cover object-center border-2 border-gray-100 border-t-0" src={props.pic} alt="blog" />
          <div class="p-5">
            <h1 class="title-font text-2xl font-thin text-white mb-3 text-center px-2">{props.title}</h1>
          </div>
          <span className="text-white text-xl">{props.currency}</span>
          <p className="text-white pb-5">{props.rating}</p>
        </div>
      </div>
  )
}
