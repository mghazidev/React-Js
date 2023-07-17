import React, { useEffect } from "react";

export default function Hero() {
    useEffect(() => {
        const dropdownButton = document.getElementById("dropdown-button");
        const dropdown = document.getElementById("dropdown");
    
        dropdownButton.addEventListener("click", () => {
          dropdown.classList.toggle("hidden");
        });
    
        // return () => {
        //   dropdownButton.removeEventListener("click", () => {
        //     dropdown.classList.toggle("hidden");
        //   });
        // };
      }, []);
    return (
<div className="">
  <div className="bg-gray-700 w-full">
    <div className="flex flex-col items-center md:gap-10 gap-5 justify-center max-w-[1240px] mx-auto h-[550px]">
      <div className="text-5xl md:text-[60px] font-bold text-[#d70101] ">Meat you Here</div>
      <p className="md:text-[27px] font-thin text-2xl text-white tracking-wide">MENU.PK is a source for restaurants menus</p>
      <form>
        <div class="flex ">
        <div class="relative w-full">
            <input type="search" id="search-dropdown" class="p-4 pl-10 md:w-[400px] text-black tracking-wide" required />
            <button type="submit" class="absolute top-0 left-0 p-2.5 h-full text-sm  text-black rounded-r-lg">
              <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </button>
          </div>
          <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-10 text-sm font-medium text-center text-gray-900 bg-white tracking-wide" type="button">Suggestion <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>
          
        </div>
        <div id="dropdown" class="bg-white hidden mt-2">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
              <li>
                <a class="block px-4 py-2 text-gray-900 ">Menus</a>
              </li>
              <li>
                <a class="block px-4 py-2 text-gray-900 ">Near by</a>
              </li>
              <li>
                <a class="block px-4 py-2 text-gray-900 ">Prices</a>
              </li>
              <li>
                <a  class="block px-4 py-2 text-gray-900 ">Cuisines</a>
              </li>
            </ul>
          </div>
      </form> {/* <input type="text" placeholder="exmaple@gmail.com" className="p-3 px-10 text-black tracking-wide" />
      <button className="flex justify-between items-center bg-white tracking-wide text-gray-700 p-3 font-thin"> Suggestions
        <BsChevronDown className="ml-2 text-grap-700 text-xl" />
      </button>
    </div> */}
  </div>
</div>
</div> 
    )
}