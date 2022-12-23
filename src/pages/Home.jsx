import { MdOutlineEqualizer } from 'react-icons/md';

import Banner from '../components/Banner';
import Slider from '../components/Slider';

import '../sass/components/home_apresentation.sass'

const Home = () => {
   document.title = 'MusicBook | HOME';
   return (
      <>
         <section className="apresentation">
            <div className="center">
               <div className="text">
                  <h1><MdOutlineEqualizer className="icon_ap"/>Music<span>BOOK</span></h1>
                  <p>Suas caminhadas e viagens mais agradáveis com as melhores musicas</p>
               </div>
            </div>
         </section>
         <Banner title="Encontre os clássicos de gerações passadas e atuais em um único lugar"/>
         <Slider/>
      </>
   )
}

export default Home;