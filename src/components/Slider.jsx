import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import '../sass/components/slide.sass';

const Slider = () => {

   const handleSlider = () => {
      const slide = document.querySelectorAll(".slide img")
      let count = 0
      setInterval(() => {
         count++
         if(count > slide.length -1) count = 0;

         for(let i = 0; i < slide.length; i++){
            if(count === i){
               slide[i].classList.add("active");
            } else {
               slide[i].classList.remove("active");
            }
         }
         // console.log(slide)
         // console.log(count);
      },4000)
   }

   useEffect(() => {
      handleSlider();
   },[])

   return(
      <section className='lendas'>
         <div className='center'>
            <h1>Conheça as lendas da musica</h1>
            <div className='container'>
               <div className='text'>
                  <p>Conheça a história das lendas da musica e que marcaram gerações ao longo da historia da musica</p>
                  <Link to="/lendas">Lendas da musica</Link>
               </div>
               <div className='slide'>
                  <img className='active' src="/imgs/slider_img1.jpg"/>
                  <img src="/imgs/slider_img2.jpg"/>
                  <img src="/imgs/slider_img3.jpg"/>
                  <img src="/imgs/slider_img4.jpg"/>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Slider;