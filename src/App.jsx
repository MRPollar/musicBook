import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Player from './components/Player';

function App() {
  const [visible,setVisible] = useState(false)
  const [id, setId] = useState(0)

  return (
    <>
      <Header/>
      {visible && <Player id={id}/>}
      <main>
        <Outlet context={{visiblePlay: [visible,setVisible],albumId:{setId}}}/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
