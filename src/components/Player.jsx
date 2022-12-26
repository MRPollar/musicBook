import { useState, useEffect } from 'react';

import { IoMdClose } from 'react-icons/io';
import { MdMinimize, MdLoop } from 'react-icons/md';
import { BsFillPlayFill, BsFillPauseFill, BsFillVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs';
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';
import { CgMaximize } from 'react-icons/cg';

import '../sass/components/player.sass';

export default function Player({ prev, next, handleMusic, handleVisible, img, album, name, musica }) {
   const [play, setPlay] = useState(false);
   const [vol, setVol] = useState(true)
   const [loop, setLoop] = useState(false);

   const handleMin = () => {
      const full = document.querySelector(".full_player");
      const min = document.querySelector(".min_player");
      full.classList.toggle('active');
      min.classList.toggle('active');
   }

   const handlePlay = () => {
      const audio = document.querySelector("#audio");
      setPlay(!play);
      if(play){
         audio.play();
      } else {
         audio.pause();
      }
   }

   const handleVol = () => {
      const audio = document.querySelector("#audio");
      if(vol){
         audio.volume = 0;
      } else {
         audio.volume = 1;
      }
      setVol(!vol);
   }

   const handleLoop = () => {
      const audio = document.querySelector("#audio");
      console.log(loop)
      if(loop === false){
         audio.loop = true;
      } else {
         audio.loop = false;
      }
      setLoop(!loop)
   }

   const progressBar = (e) => {
      const currentTime = e.target.currentTime;
      const duration = e.target.duration
      const timeline = document.querySelector(".timeline");
      const totalTimer = document.querySelector(".totalTimer");

      let totalMin = Math.floor(duration / 60)
      let totalSec = Math.floor(duration % 60)
      let currentMin = Math.floor(currentTime / 60);
      let currentSec = Math.floor(currentTime % 60);

      totalTimer.textContent = `${totalMin}:${totalSec < 10 ? "0"+totalSec : totalSec}`;
      timeline.textContent = `${currentMin}:${currentSec < 10 ? "0"+currentSec : currentSec}`;

      let progressWidth = (currentTime / duration) * 100
      document.querySelector(".progress").style.width = `${progressWidth}%`
   }

   const handleProgress = (e) => {
      const progressBar = document.querySelector(".progress_bar")
      const audio = document.querySelector("#audio");
      let progressWidth = progressBar.clientWidth
      let clicked = e.nativeEvent.offsetX
      audio.currentTime = (clicked / progressWidth) * audio.duration;
   }

   return(
      <>
         <section className="full_player">
            <div className="center">
               <div className='player'>
                  <div className='header_player'>
                     <img src={img} alt={`Album ${name}`}/>
                     <div className='info_musica'>
                        <h1>{name}</h1>
                        <p>Musica: {musica.name}</p>
                        <p>lançamento: {musica.release}</p>
                     </div>
                     <div className='acoes'>
                        <button onClick={() => handleMin()} title='minimizar'><MdMinimize className='acoes_icon'/></button>
                        <button onClick={handleVisible} title='fechar'><IoMdClose className='acoes_icon'/></button>
                     </div>
                  </div>
                  <div className='tocador'>
                     <ul>
                        {album.map((a) => {
                           let titulo = `${name} - ${a.title}`
                           if(a.id === musica.id){
                              return <li key={a.id}><button onClick={()=> handleMusic(a.id)} className='active'>{titulo.length >= 28 ? titulo.substring(0,28)+"...":titulo}</button></li>
                           } else {
                              return <li key={a.id}><button onClick={()=> handleMusic(a.id)}>{titulo.length >= 28 ? titulo.substring(0,28)+"...":titulo}</button></li>
                           }
                        })}
                     </ul>
                     <div className='controls'>
                        <img className={play === false ? "active":""} src={img} alt={`Album ${name}`}/>
                        <audio onTimeUpdate={progressBar} onEnded={()=> loop === false ? next(): handleLoop} id="audio" src={musica.dir} autoPlay={play ? false:true}></audio>
                        <div className='audio_control'>
                           <p className="timer">
                              <span className='timeline'>0:00</span>-
                              <span className='totalTimer'>0:00</span>
                           </p>
                           <p className="progress_bar" onClick={handleProgress}>
                              <span className="progress">
                                 <span className="bullet"></span>
                              </span>
                           </p>
                           <button className={loop === false ? 'acao_min':"acao_min active"} onClick={handleLoop}><MdLoop/></button>
                           <button onClick={()=> {prev()}}><BiSkipPrevious/></button>
                           <button onClick={handlePlay}>{play ? <BsFillPlayFill/>:<BsFillPauseFill/>}</button>
                           <button onClick={() => {next()}}><BiSkipNext/></button>
                           <button className='acao_min' onClick={handleVol}>{vol ? <BsFillVolumeDownFill/>:<BsFillVolumeMuteFill/>}</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="min_player" style={{"--bg": `url(${img})`}}>
            <div className='acoes'>
               <button onClick={() => handleMin()} title="Maximizar"><CgMaximize/></button>
               <button onClick={handleVisible} className='close' title="Fechar"><IoMdClose/></button>
            </div>
         </section>
      </>
   )
}