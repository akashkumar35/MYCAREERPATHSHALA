import React from 'react'
import './home.css';
import {AiOutlineMenuUnfold  } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { BiHome } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { AiFillBell } from "react-icons/ai";
import Header from './Header';
import Information from './Information';
import Upcomingeve from './Upcomingeve';
import Advertisment from './Advertisment';
import img1 from '../assets/vector-users-icon.webp'
import News from './News';
import { AiOutlineClose } from "react-icons/ai";
function Home() {

    const handlesidebar=()=>{
        document.getElementById("sidenav_open").style.width="70%";
    }
    const handleClose=()=>{
        document.getElementById("sidenav_open").style.width="0%";
    }
    
  return (
    <>
    
    <div  className='Parent_container'>
        <div className='side_nav'>
            <div className='child_side_nav'>
                <div className='menu'>
                 <AiOutlineMenuUnfold />
                </div>
                <div className='home_menu'>
                    <div className='child_home_menu'>
                        < BiHome />
                    </div>

                </div>
                <div className='contact_menu'>
                   <BiUser />
                </div>

            </div>

        </div>
        <div className='info_container'>
            <div className='info_child_container'>
            <div className='nav_container'>
                <div className='nev_left'>
                <div className='home_text'>
                    <p1 className="para">Home</p1>
                </div>
                < AiOutlineMenu className='burger_menu' onClick={()=>handlesidebar()} />
                </div>
                <div className='nav_right'>
                    <div className='profile'>
                        <img className='nav_image' src={img1} />
                    </div>
               <div className='nav_options'>
                <div className='nav_bell'>
                    <AiFillBell />

                </div>
                <div className='nav_logout'>
                    Logout
                    </div>

               </div>
                </div>
                
               
            </div>
            <Header />
            <Information/>
            <Upcomingeve />
            <Advertisment />
            <News />
            </div>
            
          

        </div>
        
      
    </div>
    <div className='responsive_side_bar' id='sidenav_open'>
            <div className='responsive_side_bar_child'>
                <div className='side_left'>
                <div className='side_left_left'>
                    <BiHome className='side_left_icon'/>
                </div>
                <div className='side_right_right'>
                <BiUser  className='side_right_contact'/>
                </div>
                   
                </div>
                <div className='side_right'>
                    <div className='side_right_top'>
                        <AiOutlineClose  className='side_right_close ' onClick={()=>handleClose()}/>
                    </div>
                   
                </div>
            </div>
    </div>
    </>
  )
}

export default Home
