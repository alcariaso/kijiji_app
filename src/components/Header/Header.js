import React from "react";
import '../Header/Header.scss';
import logo from '../../assets/images/logo.png';
import heart from '../../assets/images/heart.png';
import notification from '../../assets/images/notification.png';
import location from '../../assets/images/location.png';
import chat from '../../assets/images/chat.png';
import { Link } from "react-router-dom";


const Header = () => {


    return (
        <>
        <header className="header">
            <nav className="nav">
                <img className="logo" src={logo}></img>
                <div className="nav__search">
                    <input className="input " placeholder="What are you looking for?"></input>
                    <button className="button">All Categories</button>
                    <img className="map" src={location}></img>
                    <div className="location">Ontario</div>

                </div>

                <ul className="nav__list">
                    <li className="items"><img className="img" src={heart}></img></li>
                    <li className="items"><img  className="img" src={notification}></img></li>
                    <Link to="/Messages"className="items"><li  ><img className="img" src={chat}></img></li></Link>
                    <li className="items"><div className="profile">A</div></li>
                    <li className="items"><div className="ad">Post Ad</div></li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header