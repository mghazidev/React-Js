import React from 'react';

export default function Card(props) {
  return (
  
    <div className="p-4 md:w-1/4 ">
        <div className="h-full flex flex-col justify-center items-center bg-[#d70101] border-2 border-gray-300 shadow-lg rounded-lg overflow-hidden">
          <img className="lg:h-80 md:h-36 md:w-64 w-80 object-cover object-center border-2 border-gray-100 border-t-0" src={props.pic} alt="blog" />
          <div className="p-6">
            <h1 className="title-font text-3xl font-thin text-white mb-3">{props.title}</h1>
          </div>
        </div>
    </div>
  )
}
