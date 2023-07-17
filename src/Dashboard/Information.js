import React from 'react'
import './info.css';
import img2 from '../assets/vector-users-icon.webp';
import img3 from '../assets/info.jpg';
import ProgressBar from 'react-bootstrap/ProgressBar';
function Information() {
  return (
    <div className='information_main_container'>
      <div className='edit_info_page'>
          <div className='form'>
     <div className='form_edit_text'>
<p1 className="form_text_edit">Edit Info</p1>
     </div>
     <div className='form_image'>
        <div className='main_image'>
            <img src={img2} className='user' />
        </div>
     </div>
     <div className='form_elements'>
        <div className='name_place'>
<input type='text' placeholder='Enter your full name' className='name_placeholder' />
        </div>
        <div className='email_place'>
        <input type='text' placeholder='Enter your email address' className='email_placeholder' />
        </div>
        <div className='phone_place'>
        <input type='text' placeholder='Enter your phone number' className='phone_placeholder' />
            </div>
     </div>
     <div className='Profile_completion'>
        <div className='profile_text'>
            <p1 className="profile_text_comp">20% Profile Completed</p1>
        </div>
     </div>
          </div>
      </div>
      <div className='info_right_container'>
<div className='info_right_child'>
<div className='info_right_child_top'>
<div className='info_right_child_top_top'>
<div className='first_div'>
<p1 className="stages">Stage 1</p1>
</div>
<div className='first_div'>
<p1 className="stages">Stage 2</p1>
</div>
<div className='first_div'>
<p1 className="stages">Stage 3</p1>
</div>
<div className='first_div'>
<p1 className="stages">Stage 4</p1>
</div>
<div className='first_div'>
<p1 className="stages">Stage 5</p1>
</div>
</div>
<div className='info_right_child_top_bottom'>
  <div className='second_div'>
<p1 className="second_div_text">Your personal space</p1>
  </div>
  <div className='second_div'>
  <p1 className="second_div_text">Eligibility for your<br/> best fit </p1>
  </div>
  <div className='second_div'>
  <p1 className="second_div_text">Apply to <br/>university</p1>
  </div>
  <div className='second_div'>
  <p1 className="second_div_text">Application <br/>Status</p1>
  </div>
  <div className='second_div'>
  <p1 className="second_div_text">Visa<br/> status</p1>
  </div>
</div>
</div>
<div className='info_right_child_middle'>
  <div className='info_right_child_middle_left'>
<div className='info_right_child_middle_left_top'>
<p1 className="info_top_text">Welcome!! explore universities,courses of your choice,save,shortlist and compare  your choice of intrest</p1>
</div>
<div className='info_right_child_middle_left_middle'>
  <p1 className="info_middle_text">Boost your carrer with immense oppoturnities in abroad,with world<br/> class infrastructure and best education system</p1>
</div>
<div className='info_right_child_middle_left_bottom'>
  <p1 className="info_bottom_text">We need some information to help you in finding best universities<br/> for you </p1>
</div>
  </div>
  <div className='info_right_child_middle_right'>
    <div className='info_right_image_container'>
      <img src={img3} className='info_image' />
    </div>
    </div>
</div>
<div className='info_right_child_bottom'>
<ProgressBar now={40} className='progess' /><p1>30%</p1>
</div>
</div>
      </div>
    </div>
  )
}

export default Information
