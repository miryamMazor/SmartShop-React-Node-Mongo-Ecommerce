import { NavLink } from 'react-router-dom';
import './style.css';

export const HomeNav = () => {
    return <>
        <div className="pNav">
            <NavLink to={'login'}>Login</NavLink>
            <NavLink to={'register'}>Register</NavLink>
        </div>
    </>
}