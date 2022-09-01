import {useEffect, useState} from 'react';
import Navbar from './components/Navbar/navbar.jsx';
import Header from './components/Header/header.jsx';
import Main from './components/Main/main.jsx';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook ,faLinkedin,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {   faAnglesDown, faPhone} from '@fortawesome/free-solid-svg-icons';
import Logo from './images/logo.jpg'
import { Link,  } from 'react-scroll'
import {useWindowScroll} from 'react-use';



function App() {
  const {y: pageYOffset} = useWindowScroll()
  const [isLoading, setIsLoading] = useState(false);
  const [showArrow, setShowArrow] = useState(true);
  
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false)
    },1500)
  },[])



  useEffect(() => {
    if(pageYOffset < 550){
      setShowArrow(true)
    }else{
      setShowArrow(false)
    }
  },[pageYOffset])
  
  return (
    <div className="App">
      
      {isLoading ? (<div className="loading-page"><img className="loading-logo" src={Logo} alt="logo" height="140" width="140"/><div className="loading-circle"></div></div >):

      (<>
      <Navbar />
      
      <Header />
      
      <Main />
      {showArrow && <Link to="form" smooth={true}>
        <div className="arrows-down">
        <FontAwesomeIcon  icon={faAnglesDown}></FontAwesomeIcon>
        </div>
      </Link>}
      <div className="contact-options">
        
        <div className="contact-option fa-2x"><a href="https://wa.me/545354747"><FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon></a></div>
        <div className="contact-option fa-2x" id="contact-facebook"><a href="https://www.facebook.com/DrMikeFrenkin"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></div>
        <div className="contact-option fa-2x"><a href="tel:08-9353339"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></a></div>
      </div>
      <div className="copyright"> <h5>	&copy; Made By Eli Frenkin  <a  href="https://www.linkedin.com/in/eli-frenkin-6a75b4215/"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a> </h5></div>
      </>
      
      )

    }
    </div>
  );
}

export default App;
