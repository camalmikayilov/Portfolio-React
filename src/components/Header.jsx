// racfe react arrow functional export

import react from "react";
import Typed from 'react-typed';
import cv from '../fakeCV.pdf'


const Header = () =>{
   return(
       <div className="header-wrapper">
           <div className="main-info">
               <h1>Web development and service management</h1>

           <Typed
           className="typed-text"
                strings={[
                    'Robotics engineering',
                    'Mechatronics engineering',
                    'Front end developer']}
                    typeSpeed={40}
                    backSpeed={50}
                    
                    loop >
                    
                </Typed>
                <a href={cv} download className="downloadCV">CV-mi endir</a>
           </div>
       </div>
   )

}
export default Header

