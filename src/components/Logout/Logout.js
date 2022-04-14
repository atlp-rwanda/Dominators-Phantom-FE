import React, {useState} from 'react'

import groupIcon from '../../assets/images/phantom.png'
import dash from '../../assets/images/images.png'
import driver from '../../assets/images/driver1.png'

import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as BsIcons from "react-icons/bs"
import * as IoIcons from "react-icons/io"

import "./Logout.css";

function Logout() {
    const [noun] = useState('Onesphore');

    const [rightBar, setRightBar] = useState(false);
    const [sideBar, setSideBar] = useState(true);

  return (
    <div className='body'>
    <nav className='navbar'>    
        {/* {navBarItems}  */}
        <div className='leftNavBar'>
          <FaIcons.FaBars id='menuBars' onClick={() => setSideBar(!sideBar)} />
          <img src={groupIcon} alt="" id='busIcon' /> 
        </div> 
        <div className='rightNavBar'>
            <p className='circleWord'>{noun.charAt(0)}</p>
            <p id='noun'>{noun}</p> 
            <FaIcons.FaChevronDown id='downArrow' onClick={() => setRightBar(!rightBar)} />
        </div>
    </nav> 
    <section>
    
        {
            sideBar ? 

            <div className='sideBar'>
            <div id='dash'>
                <img src={dash} alt="" />
                <p>Dashboard</p>
            </div>
            <div id='driver'>
                <img src={driver} alt="" />
                <p>Driver & Operator</p>
            </div>
        </div> 

        : null

        }



        <div className="mainContent">

        {
            rightBar ? 

        <div className='rightBar'>

            <div className='icons'>
              <FaIcons.FaUserCircle className='icons-sub' /> 
              <p>My profile</p>
            </div>

            <div className='icons'>
              <AiIcons.AiFillSetting className='icons-sub' /> 
              <p>Settings</p>
            </div>

            <div className='icons'>
              <BsIcons.BsBellFill className='icons-sub' /> 
              <p>Notifications</p>
            </div>

            <div className='icons'>
              <IoIcons.IoMdLogOut className='icons-sub' /> 
              <p id='logout'>Logout</p>
            </div>

        </div>

        : null

        }

        </div>
    </section>
  </div>
  )
}

export default Logout;