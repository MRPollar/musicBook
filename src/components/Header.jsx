import { MdOutlineEqualizer } from 'react-icons/md';
import React from 'react';
import { Link } from 'react-router-dom';

import '../sass/components/header.sass';

const Header = () => {
   const list = document.querySelector("#list_menu");
   const btn = document.querySelector("#btnMenu");

   const handleToggle = () => {
      btn.classList.toggle("active");
      list.classList.toggle('active');
   }

   return(
      <>
         <header>
            <div className='center'>
               <div className='logo'>
                  <h1><Link to="/"><MdOutlineEqualizer className='icon-logo'/>Music<span>BOOK</span></Link></h1>
               </div>
               <form className='search'>
                  <input type="text" placeholder='Serch music'/>
               </form>
               <button onClick={() => handleToggle()} className='btnMenu' id="btnMenu"></button>
               <ul className='list_menu' id='list_menu'>
                  <div className='header_menu'>
                     <h2><MdOutlineEqualizer className='icon-menu'/>Music<span>BOOK</span></h2>
                  </div>
                  <div className='container_routes'>
                     <li><Link onClick={() => handleToggle()} to="/">Home</Link></li>
                     <li><Link onClick={() => handleToggle()} to="/albums">Albums</Link></li>
                     <li><Link onClick={() => handleToggle()} to="/favoritos">Favoritos</Link></li>
                     <li><Link onClick={() => handleToggle()} to="/nacionais">Nacionais</Link></li>
                     <li><Link onClick={() => handleToggle()} to="/lendas">Lendas da musica</Link></li>
                     <h2>Gênero musical</h2>
                     <li><Link onClick={() => handleToggle()} to="/rock">Rock</Link></li>
                     <li><Link onClick={() => handleToggle()} to="/pop">Pop</Link></li>
                     <li><Link onClick={() => handleToggle()} to="/classic">Classic</Link></li>
                     <li><Link onClick={() => handleToggle()} to="/rap">Rap</Link></li>
                     <li><Link onClick={() => handleToggle()} to="/mpb">MPB</Link></li>
                  </div>
               </ul>
            </div>
         </header>
      </>
   )
}

export default Header;