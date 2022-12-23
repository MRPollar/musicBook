import { useEffect, useState } from 'react';
import axios from 'axios';

import '../sass/components/player.sass';
import wavesurfer from 'wavesurfer.js';

const Player = ({id}) => {
   const [musicas,setMusicas] = useState([])
   const [artistTitle,setArtistTitle] = useState("")
   const [img,setImg] = useState("");
   const [musica,setMusica] = useState("");

   const getMusics = async () => {
      const req = await axios.get('/api/musics.json')
      let artist = await req.data.albums;
      artist = artist.find(a => a.id === id)
      setArtistTitle(artist.artist);
      setMusicas(artist.sounds);
      setImg(artist.image)
      setMusica(artist.sounds[0].sound)
      console.log(img)
   }

   // useEffect(()=>{
   //    wavesurfer.load(musica);
   // },[musica])

   useEffect(()=>{
      getMusics();
      console.log(wavesurfer.create({}));
   },[id])


   
   return (
      <>
         <section className="player_full">
            <div className='center'>
               <div className='player'>
                  {musicas.length == 0 && <p>Nenhuma musica</p>}
                  {musicas.length > 0 && <>
                  <div className='list'>
                     <h2>{artistTitle}</h2>
                     <ul>
                        {musicas.map(music => 
                           (<li key={music.id} onClick={() => alert("clicou")}>{artistTitle} - {music.title}</li>)
                        )}
                     </ul>
                  </div>
                  <div className='container'>
                     <img src={`${img}`} alt=""/>
                     <div id="#waveform"></div>
                  </div>
                  </>}
               </div>
            </div>
         </section>
         <section style={{display: 'none'}} className="player_min">

         </section>
      </>
   )
}
export default Player;