import { MdOutlineEqualizer } from 'react-icons/md';

import '../sass/components/footer.sass'

const Footer = () => {
   return(
      <footer>
         <div className="center">
            <h3><MdOutlineEqualizer className='icon-logo'/>Music<span>BOOK</span></h3>
         </div>
      </footer>
   )
}

export default Footer