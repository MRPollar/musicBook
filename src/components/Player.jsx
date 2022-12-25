import { IoMdClose } from 'react-icons/io';
import { MdMinimize } from 'react-icons/md'
import { BsFillPlayFill } from 'react-icons/bs'
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi'

import '../sass/components/player.sass';

export default function Player({ handleMusic,handleVisible, img, album, name, musica }) {
   return(
      <>
         <section className="full_player">
            <div className="center">
               <div className='player'>
                  <div className='header_player'>
                     <img src={img} alt="Album Starset"/>
                     <div className='info_musica'>
                        <h1>{name}</h1>
                        <p>Musica: {musica.name}</p>
                        <p>lançamento: {musica.release}</p>
                     </div>
                     <div className='acoes'>
                        <button title='minimizar'><MdMinimize className='acoes_icon'/></button>
                        <button onClick={handleVisible} title='fechar'><IoMdClose className='acoes_icon'/></button>
                     </div>
                  </div>
                  <div className='tocador'>
                     <ul>
                        {album.map((a) => {
                           if(a.id === musica.id){
                              return <li key={a.id}><button onClick={()=> handleMusic(a.id)} className='active'>{name} - {a.title}</button></li>
                           } else {
                              return <li key={a.id}><button onClick={()=> handleMusic(a.id)}>{name} - {a.title}</button></li>
                           }
                        })}
                     </ul>
                     <div className='controls'>
                        <img src={img} alt="Album Starset"/>
                        <audio controls src={musica.dir}></audio>
                        <div className='audio_control'>
                           <button><BiSkipPrevious/></button>
                           <button><BsFillPlayFill/></button>
                           <button><BiSkipNext/></button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="min_player">

         </section>
      </>
   )
}