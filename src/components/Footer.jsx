import React from 'react'
import Instagram from '../img/instagram.jfif'
import Facebook from '../img/fb.png'
import Whatsapp from '../img/wp.jfif'
import Linkedin from '../img/linkedin.png'

const Footer = () => {
  return (
    <div className='Footer'>
<div className="elaqe">
    <a href="#">Baku,Mahammedi</a>
    <a href="#">+994(70)942-02-47</a>
    <a href="#">camalmikayilov1@gmail.com</a>
</div>

<div className="elaqe">
    <a href="#">HOME</a>
    <a href="#">ABOUT ME</a>
    <a href="#">Portfolio</a>
</div>

<div className="elaqe">
    <a href="#">EXPERIENCE</a>
    <a href="#">Contact US</a>
</div>

<div className="elaqe">
    <div className="image">
<a href="https://www.instagram.com/mikay1loff/"><img src={Instagram} alt="" /></a>
<a href="https://www.facebook.com/profile.php?id=100056508919743"><img src={Facebook} alt="" /></a>
<a href="#"><img src={Whatsapp} alt="" /></a>
<a href="https://www.facebook.com/camal.mikayilov.999"><img src={Linkedin} alt="" /></a>
</div>
<a href="#">Copyright©2022 Camal Mikayilov/ All Rights Reserved</a>
</div>



    </div>
  )
}

export default Footer