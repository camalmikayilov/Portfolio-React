import React from 'react';
import Profil from '../img/profil.jfif'


const AboutMe = () => {
  return (
     <div className='container py-5'>
        <div className='row'>
            <div className='col-lg-6 col-xm-12'>
                <div className='photo-wrap mb-5'>
               <img src={Profil} alt=""className='profile-img' />
                </div>
            </div>

            <div className='col-lg-6 col-xm-12'>
                <h1 className='about-heading'>About me</h1>
                <p className='p-text'>I am a student of Mikayilov Camal Azerbaijan State University of Oil and Industry and have taken the Front-End Developer course at the TexnoEra Academy and the Microsoft Office Programs Cerficiate.</p>

            </div>
        </div>
     </div>
  )
}

export default AboutMe;