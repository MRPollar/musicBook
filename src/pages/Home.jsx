import { MdOutlineEqualizer } from 'react-icons/md';

import Banner from '../components/Banner';

import '../sass/components/home_apresentation.sass'

const Home = () => {
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
         <Banner/>
      </>
   )
}

export default Home;