import React from 'react'
import './header.css';
import img3 from '../assets/login.jpg';
function Header() {
  return (
    <div className='header_container'>
      <div className='header_left'>
<div className='header_left_child'>
<div className='top_child_container'>
<p1  className="welcome_text">Welcome! Kumar</p1>


</div>
<div className='middle_child_container'>
  <div className='middle_child_container_left'>
  <p1 className="middle_text">Unlock the world of oppoturnities with mycarrerpathshala and find your dream destination to study abroad.</p1>
  </div>
  <div className='middle_child_container_right'>
  <div className='right_child_container_images'>
    <img src={img3} className='logo_image' />
  </div>
    
  </div>
  
</div>
<div className='bottom_container_child'>
<div className='left_child_container_bottom_div'>
    <p1>Request your career counseller</p1>
  </div>
  
</div>
</div>
      </div>
      <div className='header_right'>
        <div className='header_right_child'>
         <div className='header_right_child_top'>
<p1 className="header_right_child_top_text"> Building tomorrow using technology</p1>
         </div>
         <div className='header_right_child_middle'>
          <div className='header_right_child_middle_div'>
            
          </div>
          </div>
          <div className='header_right_child_bottom'>
          <div className='header_right_child_bottom_right'>
<div className='header_right_child_bottom_right_div'>

</div>

          </div>
          <div className='header_right_child_bottom_left'>
          <div className='header_right_child_bottom_left_div'>
  
  </div>
          </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Header
