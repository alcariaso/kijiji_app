import React from "react";
import '../Header/Header.scss';
import logo from '../../assets/images/logo.png';
import heart from '../../assets/images/heart.png';
import notification from '../../assets/images/notification.png';
import chat from '../../assets/images/chat.png';


const Header = () => {


    return (
        <>
        <header className="header">
            <nav className="nav">
                <img className="logo" src={logo}></img>
                <div className="nav__search">
                    <input placeholder="What are you looking for?"></input>
                    <button></button>
                    <img src=''></img>

                </div>

                <ul className="nav__list">
                    <li className="items"><img src={heart}></img></li>
                    <li className="items"><img src={notification}></img></li>
                    <li className="items" ><img src={chat}></img></li>
                    <li className="items">A</li>
                    <li className="items"> Post Ad</li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header