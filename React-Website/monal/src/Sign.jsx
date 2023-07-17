import React from "react";

export default function Sign() {
    return (
        <div className="">
           <div className="max-w-[1240px] mx-auto">
           <div class="p-2 w-full">
                <div class="flex flex-col items-center justify-center ">
                  <label for="name" className="text-5xl text-black pt-24 pb-14 tracking-wide">Enter your email to join us or sign in</label>
                  <input type="text" id="name" name="name" className="md:w-[600px] bg-white bg-opacity-40 rounded border-2 shadow-lg border-[#d70101] text-base outline-none text-gray-900 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    <p className="py-14 text-xl tracking-wide">By continuing, I agree to Tenis's Privacy Policy and Terms of Use.</p>
                </div>
              </div>
            </div> 
        </div>
    )
}