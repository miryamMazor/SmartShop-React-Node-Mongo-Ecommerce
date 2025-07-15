import { NavLink } from "react-router-dom"
import { Home } from "./Home"
import './style.css';
import { useState } from "react";
import {useSelector} from "react-redux"
export const Nav =()=>{
    const currentUser=useSelector(s=>s.user.currentUser)
    return<>
    <div className="div">
        <NavLink to={'/Home'} className={'link'}>Home</NavLink>
        <NavLink to={'/Login'} className={'link'}>Login</NavLink>
        <NavLink to={'/AllTrips'} className={'link'}>AllTrips</NavLink>
        {currentUser && <p>{currentUser.username}</p>}
    </div>
   
    </>
}