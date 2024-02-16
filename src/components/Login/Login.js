

import './Login.scss';
import { useEffect } from 'react';
import logo from '../../assets/images/kijiji-logo.svg';
import heart from '../../assets/images/heart.png';
import chat from '../../assets/images/chat.png';
import post from '../../assets/images/savedIcon.svg';


export default function Login(){

  const google = window.google;

  const handleCallbackResponse = (response) => {
    console.log('Encoded JWT ID token: ' + response.credential);
  }


  useEffect(() => {
    const loadGoogleAPI = () => {
      google.accounts.id.initialize({
        client_id:"108449494266-o7vnm4dhaa6mp99354qgegund2hlrplf.apps.googleusercontent.com",
        callback: handleCallbackResponse,
      });
     
      google.accounts.id.renderButton(
        document.getElementById('sign-in-div'),
        { theme: 'outline', size: 'large' },
      );
    };
  
  
    if (window.google) {
      console.log("test1")
      loadGoogleAPI();
    } else {
      console.log("test1")
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.onload = loadGoogleAPI;
      document.body.appendChild(script);
    }
  }, [google.accounts.id]);

return (
<div className='display-login'>
<div className="login-form">

      <form className="login-form__fields">
      <h1 className="login-form__title">Sign in</h1>
      <p className="login-form__description">
        You can sign in using your Kijiji.ca account.
      </p>
        <label htmlFor="email" className="login-form__label">
          Email Address
        </label>
        <input type="email" id="email" className="login-form__input" />
        
        <label htmlFor="password" className="login-form__label">
          Password
        </label>
        <input type="password" id="password" className="login-form__input" />
        <a href="#forgot" className="login-form__link">Forgot Password?</a>
        
        <button type="submit" className="login-form__button">Sign in</button>
      </form>
    <div className='google-authenicate'>
      <h3>Login with Gmail</h3>
     <div  id="sign-in-div">
  </div>

    </div>
      <div className="login-form__footer">
        <p className="login-form__signup-text">
          Don’t have a Kijiji account? <a href="#signup" className="login-form__link">Create one now</a>
        </p>
        <div className="login-form__language">
          <span className="login-form__language-flag">🇨🇦</span>
          <select className="login-form__language-selector">
            <option>English</option>
            <option>Français</option>
          </select>
        </div>
      </div>
    </div>
    <div className="feature-list">
      <div className='feature-list_card'>
      <img className="logo" src={logo} alt="logo"></img>
      <h2 className="feature-list__subtitle">Unlock the full Kijiji experience</h2>
      <ul className="feature-list__items">
        <li className="feature-list__item">
        
          <img className="feature-list__icon" src={post} alt="post" ></img>

          Post, edit, manage and promote listings
        </li>
        <li className="feature-list__item">
       
          <img className="feature-list__icon" src={heart} alt="heart"></img>
          Access your favourite listings across all devices
        </li>
        <li className="feature-list__item">
        
          <img className="feature-list__icon" src={chat} alt="chat"></img>
          Easily send and receive messages
        </li>
      </ul>
    </div>
      </div>
</div>
      )


}