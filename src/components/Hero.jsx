import { useState } from "react";




const Hero = () => {
  return (
    <div className=" text-white font-poppins">
    <div>
      <div>
        <img src={hakim} alt="" />
      </div>
    </div>
    <div>
      <h1>
        Hello, My Name is <br /><span>AbdelHakim Sabkhi<br /></span>
        Full stack Web Developer & Designer
      </h1>
      <p>
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
  )
}

export default Hero