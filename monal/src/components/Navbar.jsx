import React, { useState } from "react";
import {AiOutlineMenu, AiOutlineCloseCircle} from 'react-icons/ai';
import Menu from '../components/assets/images/Logo.png';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="border-b-2 border-gray-200">
         <div className="max-w-[1240px] flex justify-between mx-auto items-center">
            <div className="flex flex-wrap items-center text-4xl md:text-5xl font-bold text-white">
            <NavLink to="/" ><img src={Menu} className="md:w-[100px] w-[70px] "></img></NavLink> 
            </div>
            {
                toggle ?
                < AiOutlineCloseCircle onClick={() => setToggle(!toggle)} className="text-black text-3xl lg:hidden md:hidden"/>
                :
                < AiOutlineMenu onClick={() => setToggle(!toggle)} className="text-black text-3xl lg:hidden md:hidden"/>
            }
            
            <ul className="hidden md:flex md:text-2xl text-black gap-10 items-center text-xl">
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                <NavLink to="/signin">Sign in</NavLink>

                </li>
            </ul>
            {/* responsive */}
            <ul className={`md:hidden duration-500 text-white text-center text-xl h-screen fixed bg-black top-[72px] w-full 
            ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
                <li className="mt-6 cursor-pointer" onClick={() => setToggle(!toggle)}> <NavLink to="/about">About</NavLink></li>
                <li className="mt-6 cursor-pointer" onClick={() => setToggle(!toggle)}><NavLink to="/contact">Contact</NavLink></li>
                <li className="mt-6 cursor-pointer" onClick={() => setToggle(!toggle)}> <NavLink to="/signin">Sign in</NavLink></li>
            </ul>
        </div>
    </div>
    )
}