import './main.css'
import React from 'react'
import person1 from '../../images/befor-person-1.jpeg'
import person2 from '../../images/after-person-1.jpeg';
import person3 from '../../images/photo-1.jpg'
import person4 from '../../images/photo-2.jpg';
import person5 from '../../images/befor-person-2.jpeg'
import person6 from '../../images/after-person-2.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile, faGift, faTooth, faTeethOpen} from '@fortawesome/free-solid-svg-icons'



import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import { Link, animateScroll as scroll } from 'react-scroll'



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Main = () => {


  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);



  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };

  return (
    <div className="main-container">
      <div className="main">
        <div className="main-card">
      <Card sx={{borderRadius:'15px'}} className="box-2"><h1>הלבנת שיניים <FontAwesomeIcon style={{borderRadius:'50px',color:'green',padding:'5px',transform:'translateY(10px)'}} icon={faTooth}></FontAwesomeIcon></h1><h3 style={{ borderRadius:'10px',marginTop:'10px', color:'green', cursor: 'pointer'}} onClick={handleExpandClick}>למה?</h3>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Tooltip title="עוד פרטים">
          <ExpandMoreIcon />
          </Tooltip>
        </ExpandMore>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Typography>הלבנת שיניים הוא אחד הטיפולים הפופולאריים שמטרתו היא הבהרת השן מכתמים ומגוונים שונים שנוצרו כתוצאה מכמה גורמים: הגורם הראשון קשור למנגנון הזמן והגיל, שכן במרוץ השנים, נשחקת שכבת האמייל ושכבת הדנטין הנמצאות על גבי השן, הן מצהיבות ומכהות את גוון השן. סיבה נוספת תלויה בגורם האנושי וקשורה לסוג המזון שאנו צורכים, מידת השימוש במשקאות עמוסים בקופאין כגון קפה לסוגיו השונים, תה עם קופאין לסוגיו השונים, יינות אדומים, עישון סיגריות וכן, עשויה גם להיגרם מצחצוח שיניים אובססיבי או משימוש במשחת שיניים חזקה מידי ששוחקת את שכבת האמייל.</Typography>
          <div className="cards-button">
          <Button variant="contained" color="success"><Link smooth={true}  to="form">השאר פרטים</Link ></Button>
          </div>
          </Collapse>

        </Card>
        </div>
        
        
        <br/>
        <div className="main-card">
      <Card sx={{borderRadius:'15px'}} className="box-2"><h1>הלבנת שיניים <FontAwesomeIcon style={{backgroundColor:'white',borderRadius:'50px',color:'green',padding:'5px',transform:'translateY(10px)'}} icon={faTeethOpen}></FontAwesomeIcon></h1><h3 style={{ borderRadius:'10px',marginTop:'10px',color:'green',cursor: 'pointer'}} onClick={handleExpandClick2}>איך?</h3>
        <ExpandMore
          expand={expanded2}
          onClick={handleExpandClick2}
          aria-expanded={expanded2}
          aria-label="show more"
        >
          <Tooltip title="עוד פרטים">
          <ExpandMoreIcon />
          </Tooltip>
        </ExpandMore>
          <Collapse in={expanded2} timeout="auto" unmountOnExit>
            <Typography>טיפול הלבנת השיניים מתבצע בכמה דרכים: הדרך הראשונה היא שיטת הלבנה מידית הנעשית אצל רופא השיניים תוך שימוש בחומרים שונים מהולים במי חמצן. מי החמצן מאפשר את חדירת חומרי ההלבנה אל הדנטין דרך הנקבוביות שקיימות בשן ומנקה ומלבין אותה. שיטה נוספת היא שיטת ההלבנה הממושכת (הביתית) בשיטה זו משתמשים בריכוז נמוך יותר של חומרים פעילים ולכן הלבנת שיניים מסוג זה נמשכת בין 7-14 ימים. בהלבנה זו אין צורך בהשגחת רופא צמודה והיא מתבצעת כאשר רופא השיניים מספק למטופל סד לילה העשוי מפלסטיק שקוף ותמיסת הלבנה. את הסד מניח המטופל בין שעה לעשר שעות (בד"כ בלילה) וההלבנה מתבצעת בשלבים. יתרון שיטת הלבנת שיניים זו נעוץ בכך שהמטופל שולט בקצב ההלבנה ובמידת ההלבנה.</Typography>
<div className="cards-button">
          <Button variant="contained" color="success"><Link smooth={true}  to="form">השאר פרטים</Link ></Button>
          </div>
          </Collapse>
        </Card>
        </div>
        
        <br/>
        <div className="main-card">
      <Card sx={{borderRadius:'15px'}} className="box-2"><h1>הלבנת שיניים  <FontAwesomeIcon style={{backgroundColor:'white',borderRadius:'50px',color:'green',padding:'5px',transform:'translateY(5px)'}} icon={faGift}></FontAwesomeIcon></h1><h3 style={{color:'green', borderRadius:'10px',marginTop:'10px', cursor: 'pointer'}} onClick={handleExpandClick3}>מבצע!</h3>
        <ExpandMore
          expand={expanded3}
          onClick={handleExpandClick3}
          aria-expanded={expanded3}
          aria-label="show more"
        >


<Tooltip title="עוד פרטים">
 
          <ExpandMoreIcon />
          </Tooltip>
        </ExpandMore>
          <Collapse in={expanded3} timeout="auto" unmountOnExit>
             <h4 style={{color:'green'}}>הסרת אבנית לפני הלבנת שיניים חינם!</h4>
             <div className="cards-button">
          <Button variant="contained" color="success"><Link smooth={true}  to="form">השאר פרטים</Link ></Button>
          </div>
          </Collapse>
        </Card>

        </div>
        
      {/* <div className="main-text">
        <h1>הלבנת שיניים</h1>
        <p>
                    הלבנת שיניים אצל דר מייק פרנקין ב ל ב ד!
            הלבנת שיניים ב-3 שיטות לבחירה!
            תכשירים גרמניים איכותיים עם תוצאות מרשימות!
            במחירים שאת לא רוצה לפספס 
            <br/>
            1 – הלבנה תוך 40 דק' במרפאה אצל ד"ר פרנקין
            <br/>
            2 – הלבנה עם סד, לשימוש בבית במשך 7-14 ימים
            <br/>
            3-חדש-חדש-חדש-מדבקות מלבינות את השיניים

        </p>
      </div> */}
      </div>
      
      <div className="main-bottom">
      <svg className="main-line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#254E58" fill-opacity="1" d="M0,224L1440,0L1440,0L0,0Z"></path>
      </svg>
      <div className="main-boxes">
        <div className="main-box"><p className="img-desc">לחץ על התמונה</p><img src={person1}  /><img src={person2} className="top-img" /></div>
        <div className="main-box"><p className="img-desc">לחץ על התמונה</p><img src={person5}  /><img src={person6} className="top-img" /></div>
      </div>
      </div>
      <div className="footer">
      <div className="main-send-message">
        <div>
        <h1 className="form-title">השאירו פרטים ונחזור אליכם</h1>
        <form id="form" 
              className="main-form" 
              name="contact v1"
              method="post"
              data-netlify="true"
              onSubmit='submit'
              >
                <input type="hidden" name="form-name" value="contact v1"/>
          <h2>שם</h2>
          <input type='text' name="שם"/>
          <h2>טלפון</h2>
          <input type='email' name="email"/>

          <button type="submit" > שלח/י</button>
        </form>
        </div>
        <div className="main-map">
          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.6420761592963!2d34.80800018491138!3d31.88914768124909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b7118cb168b1%3A0x45ae702297973fa1!2z16nXkNeV15wg15jXqdeo16DXmdeX15XXkdeh16fXmSA2Nywg16jXl9eV15HXldeq!5e0!3m2!1siw!2sil!4v1658873741712!5m2!1siw!2sil" width={300} height={300} style={{border:"0",width:"100%", height:"100%",padding:"5px",opacity:'0.8',}}  ></iframe>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Main