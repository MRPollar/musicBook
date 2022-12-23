import { MdOutlineEqualizer } from 'react-icons/md';
import React from 'react';
import { Link } from 'react-router-dom';

import '../sass/components/header.sass';

const Header = () => {

   const handleToggle = (btn) => {
      const list = document.querySelector(".list_menu");
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
               <button onClick={(e) => handleToggle(e.target)} className='btnMenu'></button>
               <ul className='list_menu'>
                  <div className='header_menu'>
                     <h2><MdOutlineEqualizer className='icon-menu'/>Music<span>BOOK</span></h2>
                  </div>
                  <div className='container_routes'>
                     <li><Link to="/">Home</Link></li>
                     <li><Link to="/albums">Albums</Link></li>
                     <li><Link to="/favoritos">Favoritos</Link></li>
                     <li><Link to="/nacionais">Nacionais</Link></li>
                     <li><Link to="/lendas">Lendas da musica</Link></li>
                     <h2>Gênero musical</h2>
                     <li><Link to="/rock">Rock</Link></li>
                     <li><Link to="/pop">Pop</Link></li>
                     <li><Link to="/classic">Classic</Link></li>
                     <li><Link to="/rap">Rap</Link></li>
                     <li><Link to="/mpb">MPB</Link></li>
                  </div>
               </ul>
            </div>
         </header>
      </>
   )
}

export default Header;