import { MdAlbum } from 'react-icons/md';
import { FiPlay } from 'react-icons/fi';
import { useOutletContext } from 'react-router-dom';

const AlbumCard = ({album,handleAlbum}) => {

   return(
      <div className="card_single">
         <img src={album.image} alt={album.artist}/>
         <div className="text">
            <h1>{album.artist}</h1>
            <h2>{album.genre}</h2>
            <p><MdAlbum className='disc_icon'/>{album.sounds.length}</p>
            <button onClick={() => handleAlbum(album.id)} className='redirect_album'><FiPlay/>Play</button>
         </div>
      </div>
   )
}

export default AlbumCard;