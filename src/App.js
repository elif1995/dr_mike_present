import Navbar from './components/Navbar/navbar.jsx';
import Header from './components/Header/header.jsx';
import Main from './components/Main/main.jsx';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook ,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {  faPhone} from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div className="App">
      
      <Navbar />
      
      <Header />
      {/* <div className="leave-message">
      <a className="leave-message" href="#form"><h2>השאירו פרטים</h2></a>
      </div> */}
      <Main />
      <div className="contact-options">
        
        <div className="contact-option fa-2x"><a href="https://wa.me/545354747"><FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon></a></div>
        <div className="contact-option fa-2x" id="contact-facebook"><a href="https://www.facebook.com/DrMikeFrenkin"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></div>
        <div className="contact-option fa-2x"><a href="tel:08-9353339"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></a></div>
      </div>
    </div>
  );
}

export default App;
