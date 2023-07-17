import React from 'react'
import './advertisment.css';
import img1 from '../assets/advertising.png';
function Advertisment() {
  return (
    <div className='ads_main_container'>
      <div className='ads_child_container'>
<img src={img1} className='ad_image' />
        </div>  
      
    </div>
  )
}

export default Advertisment
