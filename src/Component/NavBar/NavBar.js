import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from '../Button/Button';
import './NavBar.css'

function NavBar() {
   const [click, setClick ] = useState(false);
   const [button, setButton] = useState(true);

   const handleClick = () => setClick(!click);
   const closeMobileMenu = () => setClick(false);
   const showButton = () => {
      if(window.innerWidth <= 980){
         setButton(false);
      } else{
         setButton(true);
      }
   }
   window.addEventListener('resize', showButton);

    return (
      <>
         <nav className="navbar"> 
            <div className="navbar-container">             
               <Link to="/" className="navbar-logo">
                  Welcome<i class="fas fa-biohazard"></i>
               </Link>
               <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>   
               </div>       
               <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className="nav-item">
                     <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                        Home
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link to='/AboutMe' className='nav-links' onClick={closeMobileMenu}>
                        About me
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link to='/Proyects' className='nav-links' onClick={closeMobileMenu}>
                        Proyects
                     </Link>
                  </li>
               </ul>
               
               {button && <Button buttonStyle='btn--outline'>holis 2</Button>}
            </div>
         </nav>
      </>
    )
}

export default NavBar
