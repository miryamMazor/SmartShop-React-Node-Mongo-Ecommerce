import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button as BaseButton, buttonClasses } from '@mui/base/Button';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import { setCurrentUser, admin } from './redux/Action';
import './home.css'

function Home() {
    // const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    //   console.log(`המשתמש המחובר: ${loggedInUser.name}`);

    const user = useSelector(x => x.currentUser);
    const Tadmin = useSelector(state => state.admin); // קבלת המשתמש הנוכחי מ-Redux

    const sum = useSelector(state => state.totalAmount); // קריאה לערך sum מה-Redux state
    console.log(admin);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(setCurrentUser({}));
        dispatch(admin({}));

    };
    return <>
        <div className='home'>
            {/* <h1>sum= {sum}</h1> */}
            <h1>Welcome</h1>
            {user && <h1>  {user.name}</h1>}
            {admin && <h1>   {Tadmin.name}</h1>}
            <h1>LearnTech ברוכים הבאים ל</h1>
            <h2> !העתיד שלכם מתחיל כאן</h2>
            <h3>מי אנחנו?
                LearnTech הוא האתר המוביל ללימוד והכשרה בשפות תכנות
                ואביזרי מחשב. אנו מחויבים להעניק לכם את הידע והכלים הדרושים להצלחה בעולם הטכנולוגיה המתפתח במהירות. בין אם אתם מתחילים את דרככם בעולם התכנות או שאתם מקצוענים שרוצים להרחיב את הידע שלכם,
                אנחנו כאן כדי לעזור לכם להשיג את מטרותיכם.
            </h3>
            {/* <h4>למה ללמוד איתנו?
            קורסים מקצועיים ומקיפים: הקורסים שלנו נכתבו ונבנו על ידי מומחים בתחום, עם דגש על פרקטיקה ויישום.
            מגוון רחב של נושאים: אצלנו תמצאו קורסים בשפות תכנות פופולריות כמו Python, JavaScript, Java, C++ ועוד, לצד קורסים על שימוש באביזרי מחשב מתקדמים.
            למידה בכל זמן ובכל מקום: הפלטפורמה שלנו זמינה 24/7, כך שתוכלו ללמוד בזמן ובקצב שמתאימים לכם.
            תמיכה וקהילה: הצטרפו לקהילה שלנו וקבלו תמיכה ממדריכים ומלומדים אחרים. אנחנו כאן כדי לסייע בכל שאלה או אתגר.
        </h4> */}
            <h3>קורסים פופולריים
                מבוא לפיתוח תוכנה עם Python: התחילו את המסע שלכם בעולם התכנות עם Python, אחת השפות המבוקשות ביותר בשוק.
                JavaScript למתחילים ומתקדמים: לימדו את הבסיס והעמיקו בנושאים מתקדמים בשפה שמניעה את הרשת.
                פיתוח אפליקציות עם Java: הפכו למומחים בפיתוח אפליקציות מובייל ודסקטופ עם Java.
                ניהול רשתות ואבטחת מידע: קורס מקיף להיכרות עם ניהול רשתות ואבטחת מידע בעידן הדיגיטלי.
                בחירת והרכבת מחשב אישי: למד על כל רכיבי המחשב ואיך לבחור ולהרכיב את המחשב המתאים לצרכים שלכם.
            </h3>
            <h4>מה אומרים עלינו?
                "הקורסים של LearnTech היו מעמיקים וברורים. בזכותם הצלחתי לשדרג את הקריירה שלי בתחום התכנות." - דנה לוי, מתכנתת

                "לא רק שלמדתי איך לתכנת ב-Java, גם קיבלתי תמיכה מצוות המדריכים לאורך כל הדרך. חוויה מעולה!" - מרים מזור, מפתח אפליקציות

                הצטרפו אלינו עוד היום!
                אל תפספסו את ההזדמנות לשדרג את היכולות הטכנולוגיות שלכם. הירשמו עכשיו והתחילו ללמוד את הקורס שמתאים לכם ביותר.

                צרו קשר
                יש לכם שאלות? נשמח לעזור!
                <br />
                דוא"ל: support@learntech.com
                <br />
                טלפון: 054-6251321
                <br />
                כתובת: רחוב הטכנולוגיה 15, תל אביב, ישראל
                <br />
                בואו נתחיל את המסע שלכם יחד.
                <br />
                LearnTech
                <br />
                העתיד שלכם בטכנולוגיה מתחיל כאן
            </h4>

            <Button onClick={handleLogout}>יציאה</Button></div>
    </>

}

export default Home;

const blue = {
    200: '#99CCFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0066CC',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const Button = styled(BaseButton)(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    background-color: ${blue[500]};
    padding: 8px 16px;
    border-radius: 8px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: 1px solid ${blue[500]};
    box-shadow: 0 2px 1px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(45, 45, 60, 0.2)'
        }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};
  
    &:hover {
      background-color: ${blue[600]};
    }
  
    &.${buttonClasses.active} {
      background-color: ${blue[700]};
      box-shadow: none;
      transform: scale(0.99);
    }
  
    &.${buttonClasses.focusVisible} {
      box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
      outline: none;
    }
  
    &.${buttonClasses.disabled} {
      background-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
      color: ${theme.palette.mode === 'dark' ? grey[200] : grey[700]};
      border: 0;
      cursor: default;
      box-shadow: none;
      transform: scale(1);
    }
    `,
);