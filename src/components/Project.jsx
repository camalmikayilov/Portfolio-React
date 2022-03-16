import React from 'react'
import Burger from '../img/burger.png'
import Healthy from '../img/healthy.png'
import Prosecurse from '../img/prosecurse.png'

const Project = () => {
  return (
    <div className='Project'>
        <h2>Project</h2>

<div className="full">
<a className='first' href="https://github.com/camalmikayilov/FullProjectBurger.git" target='_blank'><img src={Burger} alt="" /></a>
<a className='second' href="https://github.com/camalmikayilov/HealthyFood.git" target='_blank'><img src={Healthy} alt="" /></a>
<a className='third' href="https://github.com/camalmikayilov/Prosecurse.git"  target='_blank'><img src={Prosecurse} alt="" /></a>
</div>


    </div>
  )
}

export default Project