import { MdAlbum } from 'react-icons/md';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Banner from '../components/Banner';
import AlbumCard from '../components/AlbumCard';

import '../sass/components/albums.sass'

const Albums = () => {
   document.title = 'MusicBook | ALBUMS';
   const [albums, setAlbums] = useState([]);

   const getAlbums = async (url) => {
      const { data } = await axios.get(url)
      const response = data.albums
      setAlbums(response);
   }

   useEffect(() => {
      const url = '/api/musics.json';
      getAlbums(url);
   },[]);

   return(
      <>
         <Banner/>
         <section className='albums'>
            <div className='center'>
               <h1><MdAlbum/>Albums</h1>
               {albums.length === 0 && <h2>Sem Albums para exibir</h2>}
               {albums.length > 0 && <div className='container_card'>
                  {albums.map(album => <AlbumCard key={album.id} album={album}/>)}
               </div>}
            </div>
         </section>
      </>
   )
}

export default Albums