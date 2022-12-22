import '../sass/components/banner.sass'

const Banner = () => {
   return(
      <section className="banner">
         <img className='left' src="/imgs/classic_music.jpg"/>
         <img className='right' src="/imgs/atual_music.jpg"/>
         <div className='center'>
            <h1>Atuais e classicas em um só lugar</h1>
         </div>
      </section>
   )
}

export default Banner;