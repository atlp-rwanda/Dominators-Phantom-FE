import React, { Component } from 'react'
// import groupIcon from '../images/phantom.png'
// import dash from '../images/images.png'
// import user from '../assets/icons/user.png'

// import driver from '../assets/images/driver1.png';
// import setting from '../images/setting.png'
// import notify from '../images/notify.png'
// import logout from '../images/logout.png'
import * as FaIcons from "react-icons/fa"
import { Link } from 'react-router-dom'


class Logout extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
        noun: 'Darcy',
        visible: false,
        barVisibility: true,
        isLoggedin: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
}

toggleMenu() {
    this.setState({visible: !this.state.visible})
}


togglebar = () => {
  this.setState({
    barVisibility: !this.state.barVisibility
  })
}



logout = () => {
  localStorage.removeItem('token-info');
};

  render() {
    //   const navBarItems = (
    //     <ul>
    //         <li>Home</li>
    //         <li>About</li>
    //         <li>Contact</li>
           
    //     </ul>
    //   )
    
    return (
      <div className='body'>
        <nav className='navbar'>    
            {/* {navBarItems}  */}
            <div className='local'>
              <FaIcons.FaBars id='menuBars' onClick={this.togglebar} />
              <img src={groupIcon} alt="" id='busIcon' /> 
            </div> 
            <div className='pees'>
                <p className='circleWord'>{this.state.noun.charAt(0)}</p>
                <p id='noun'>{this.state.noun}</p> 
                <FaIcons.FaChevronDown id='downArrow' onClick={this.toggleMenu} />
            </div>
        </nav> 
        <section>

        {this.state.barVisibility ? 
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

            {this.state.visible && <div className='display'>

                            <div className='icons'>
                              <img src={user} alt="" />
                              <p>My profile</p>
                            </div>
        
                            <div className='icons'>
                              <img src={setting} alt="" id='setting' className='rss opacity' />
                              <p>Settings</p>
                            </div>
        
                            <div className='icons'>
                              <img src={notify} alt="" id='notify' />
                              <p>Notifications</p>
                            </div>
        
                            <div className='icons'>
                              <img src={logout} alt="" id='logout' />
                              <p id='anchor'>< Link to="/Login" onClickCapture={logout}>Logout</Link></p>
                            </div>
        
                        </div>
              }

            </div>
        </section>
      </div>
    )
  }

}

export default Logout;