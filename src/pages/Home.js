import React from "react";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";
import HomeSection from "../components/HomeSection";

function Home() {
    const content ="Duis incididunt in ad laborum ut commodo Lorem fugiat magna esse in laborum magna nulla. Ad duis labore sunt ipsum in fugiat aliquip excepteur. Voluptate cupidatat ex minim occaecat sit eu tempor commodo deserunt adipisicing culpa nostrud reprehenderit.";
    return (
    <>
      <HomeSection title="All Beers" link="/beers" content={content} img={beers} alt="beers"/>
      <HomeSection title="Random Beer" link="/random-beer" content={content} img={randomBeer} alt="random-beer"/>
      <HomeSection title="New Beer" link="/new-beer" content={content} img={newBeer} alt="new-beer"/>
    </>
  );
}

export default Home;