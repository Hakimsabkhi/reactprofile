import { useState } from "react";
import { hakim } from "../assets";


const Hero = () => {
  return (
    <div className="grid max-w-screen-xl min-h-screen px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="hidden lg:col-span-5 lg:flex">
        <img src={hakim} className=" w-[600px] rounded-lg cursor-pointer filter grayscale" alt="" />
      </div>
    <div className=" place-self-center lg:col-span-6 text-white flex flex-col justify-around h-3/4">
      <h1 className="text-4xl font-roboto flex flex-col justify-around h-1/4">
        Hello, My Name is <br /><span className="text-6xl text-Green font-bold">AbdelHakim Sabkhi<br /></span>
        Full stack Web Developer & Designer
      </h1>
      <p className="text-2xl font-roboto">
        A passionate creative professional who thrives in the realms of
        graphic design and web development.As a graphic designer, I pride
        myself on my ability to turn ideas into visual masterpieces, using
        design principles to captivate and communicate effectively.
        Simultaneously, my skills as a web developer allow me to bring these
        designs to life, creating user-friendly and visually appealing
        websites that leave a lasting impact.
      </p>
      <div>
        <a href="">
          <span>Contact Me</span>
        </a>
        <a href="">
          <span>Call Me</span>
        </a>
      </div>
    </div>
  </div>
  );
}

export default Hero