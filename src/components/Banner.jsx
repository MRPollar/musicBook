import '../sass/components/banner.sass'
import { Link } from 'react-router-dom';

const Banner = ({title}) => {
   return(
      <section className="banner">
         <img className='left' src="/imgs/classic_music.jpg" alt=""/>
         <img className='right' src="/imgs/atual_music.jpg" alt=""/>
         <div className='center'>
            {title !== undefined && 
            <div>
               <h1>{title}</h1>
               <Link to="/albums">Ver albums</Link>
            </div>}
         </div>
      </section>
   )
}

export default Banner;