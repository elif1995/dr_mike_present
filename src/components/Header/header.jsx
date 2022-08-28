import React from 'react'
import './header.css';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';


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


const Header = () => {

  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  return (
    <div className="header">
      <div className="header-image">
      {/* <svg className="header-line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#254E58" fill-opacity="1" d="M0,224L1440,0L1440,320L0,320Z"></path>
      </svg> */}
      </div>
      <div className="header-boxes">
        {/* <Card className="box-1"><h1>דירוג גבוהה  ⭐</h1><h4> 
          דירוג גבוהה של חמישה כוכבים בגוגל ודירוג גבוהה באתרי דירוג נוספים</h4>
        <ExpandMore
          expand={expanded2}
          onClick={handleExpandClick2}
          aria-expanded={expanded2}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
          <Collapse in={expanded2} timeout="auto" unmountOnExit>
            <p>טיפול הלבנת השיניים מתבצע בכמה דרכים: הדרך הראשונה היא שיטת הלבנה מידית הנעשית אצל רופא השיניים תוך שימוש בחומרים שונים מהולים במי חמצן. מי החמצן מאפשר את חדירת חומרי ההלבנה אל הדנטין דרך הנקבוביות שקיימות בשן ומנקה ומלבין אותה. שיטה נוספת היא שיטת ההלבנה הממושכת (הביתית) בשיטה זו משתמשים בריכוז נמוך יותר של חומרים פעילים ולכן הלבנת שיניים מסוג זה נמשכת בין 3-8 ימים. בהלבנה זו אין צורך בהשגחת רופא צמודה והיא מתבצעת כאשר רופא השיניים מספק למטופל סד לילה העשוי מפלסטיק שקוף ותמיסת הלבנה. את הסד מניח המטופל בין שעה לעשר שעות (בד"כ בלילה) וההלבנה מתבצעת בשלבים. יתרון שיטת הלבנת שיניים זו נעוץ בכך שהמטופל שולט בקצב ההלבנה ובמידת ההלבנה.
מרפאות המבצעות את הטיפול</p>
          </Collapse>
        </Card> */}
        
      </div>
    </div>
  )
}

export default Header