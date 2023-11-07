import "./Header.css";
import { useState } from "react";

function Header() {

  const [location, setLocation] = useState('about-me')

  return (
    <header id="header">
      <img
        src="../public/ms.svg"
        alt="MS Logo"
        id="header-logo-ms"
        className="header-disp"
      />
      <div>
        <div id="header-btns-div" className="header-disp">
          <button className="header-btns-btn" onClick={() => setLocation('about-me')} >A propos de moi</button>
          <button className="header-btns-btn" onClick={() => setLocation('feed')} >Feed</button>
          <button className="header-btns-btn" onClick={() => setLocation('contact')} >Contact</button>
        </div>
        <div id="selected-btn-dot" className={
          location === 'about-me' ? 'about-me' :
          location === 'feed' ? 'feed' : 'contact'
        } />
      </div>
    </header>
  );
}

export default Header;
