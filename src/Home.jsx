import React from "react";
import Hero from './components/Hero';
import Restaurants from "./components/Restaurants";
import Menus from './components/Menus';
import Cuisines from "./components/Cuisines";

export default function Home() {
    return (
        <>
        <Hero />
        <Restaurants />
        <Menus />
        <Cuisines />
        </>
    )
}