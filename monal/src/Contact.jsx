import React from "react";

export default function Contact() {
    return (
        <section class="text-gray-400 body-font relative">
        <div class="max-w-[1240px] px-2 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-[70px] text-2xl font-thin title-font mb-10 text-[#d70101]">Contact Us</h1>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="md:flex flex-wrap m-2 justify-between">
              <div class="p-2 md:w-1/4">
                <div class="relative">
                  <label for="name" className="text-xl  text-black">Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-white bg-opacity-40 rounded border-2 shadow-lg border-[#d70101] text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div class="p-2 md:w-1/4">
                <div class="relative">
                  <label for="name" className="text-xl  text-black">Contact</label>
                  <input type="text" id="name" name="name" className="w-full bg-white bg-opacity-40 rounded border-2 shadow-lg border-[#d70101] text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div class="p-2 md:w-1/4">
                <div class="relative">
                  <label for="email" className="text-xl  text-black">Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-white bg-opacity-40 rounded border-2 shadow-lg border-[#d70101] text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="email" className="text-xl  text-black">Subject</label>
                  <input type="email" id="email" name="email" className="w-full bg-white bg-opacity-40 rounded border-2 shadow-lg border-[#d70101] text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" className="text-xl  text-black">Message</label>
                  <textarea id="message" name="message" className="w-full bg-white bg-opacity-40 rounded border-2 shadow-lg border-[#d70101] h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div class="p-2 w-full flex justify-end">
                <button class="text-black bg-white shadow-lg border-2 border-[#d70101] py-2 px-8 rounded text-lg text-right md:text-right">Button</button>
              </div>
            </div>
          </div>
        </div>
      </section>  
    )
}