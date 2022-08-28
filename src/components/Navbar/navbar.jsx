import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {  faPhone} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../images/logo.jpg';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-phone">
        <a href="tel:08-9353339" ><FontAwesomeIcon style={{color: '#88BDBC'}} icon={faPhone}></FontAwesomeIcon>  08-9353339</a>
      </div>
      <div className="navbar-address">
        <h5>  מרפאת שיניים ד"ר מייק פרנקין  </h5>
        <h5> שאול טשרניחובסקי 67, רחובות </h5> 
      </div>
      <div className="navbar-title">
        <h2><img src={Logo} height={50} />  </h2>
      </div>
    </div>
  )
}

export default Navbar