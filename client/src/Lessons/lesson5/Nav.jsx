import { Link, NavLink } from 'react-router-dom';
import './style.css';

export const Nav = () => {
    return <>
        <div className="div">
            {/* ניגשת לשרת לשלוף את דף האינטרנט הרצוי a תגית  */}
            {/* <a href="/home" className='link'>Home</a> */}
            {/* <a href="/login" className='link'>Login</a> */}
            {/* <a href="/welcome" className='link'>Welcome</a> */}

            {/* של ריאקט טוענת מראש את כל הדפים לוקאלית וניגשת לקחת משם את הדף הרצוי Link תגית  */}
            {/* חיסכון משמעותי בזמן ריצה של הדפדפן */}
            {/* <Link to={'/home'} className={'link'}>Home</Link> */}
            {/* <Link to={'/login'} className={'link'}>Login</Link> */}
            {/* <Link to={'/welcome'} className={'link'}>Welcome</Link> */}

            {/* NavLink - תגית זהה ללינק הרגיל של ריאקט */}
            {/* active הפלוס שלה עיצובי בלבד - מזהה את הלינק העכשווי ונותנת לו את העיצוב שמוגדר בקלאס  */}
            <NavLink to={'/home'} className={'link'}>Home</NavLink>
            {/* <NavLink to={'/login'} className={'link'}>Login</NavLink> */}
            <NavLink to={'/products'} className={'link'}>Products</NavLink>
            {/* <NavLink to={'/welcome'} className={'link'}>Welcome</NavLink> */}
        </div>
    </>
}