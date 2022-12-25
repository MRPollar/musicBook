import { useState, useEffect } from "react";
import axios from "axios";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Player from "./components/Player";

function App() {
  const [album,setAlbum] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState(1);
  const [musica, setMusica] = useState(0);
  const [musicaName, setMusicaName] = useState("")
  const [musicaDir, setMusicaDir] = useState("");
  const [date, setDate] = useState("");
  const [img, setImg] = useState("");
  const [visible,setVisible] = useState(false);

  const getAlbum = async () => {
    const { data } = await axios.get('/api/musics.json')
    const response = await data.albums.find(a => a.id === id);
    setAlbum(response.sounds);
    setName(response.artist);
    setImg(response.image);
    setMusica(response.sounds[0].id);
    setMusicaName(response.sounds[0].title);
    setMusicaDir(response.sounds[0].sound);
    setDate(response.sounds[0].release_date);
  }

  const handleAlbum = (index) => {
    setId(index);
    setVisible(!visible)
  }

  const handleVisible = () => {
    setAlbum([]);
    setName("");
    setMusica(0);
    setImg("")
    setId(0)
    setVisible(false);
  }

  useEffect(() => {
    getAlbum();
  },[id])

  const handleMusic = (index) => {
    const data = album.find(a => a.id === index);
    setMusica(data.id);
    setMusicaName(data.title);
    setMusicaDir(data.sound);
    setDate(data.release_date);
  }

  return (
    <>
      <Header/>
      <main>
        <Outlet context={{handleAlbum, setVisible}}/>
      </main>
      {visible && <Player handleMusic={handleMusic} handleVisible={handleVisible} img={img} album={album} name={name} musica={{id: musica,name:musicaName,dir:musicaDir,release: date}}/>}
      <Footer/>
    </>
  );
}

export default App;
