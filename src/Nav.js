import React, { useState, useEffect } from "react";
import "./Nav.css";
import searchIcon from "./images/search-24px.svg";
import notificationIcon from "./images/notifications-24px.svg";
import referIcon from "./images/card_giftcard-24px.svg";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const netflixHome = () => {
    console.log("Home Page");
  };

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        onClick={() => netflixHome()}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
        alt="nteflix_logo"
      />
      <div style={{ justifyContent: "space-between" }}>
        <div className="nav__header__left">
          <h4 className="nav__options">Home</h4>
          <h4 className="nav__options">TV Shows</h4>
          <h4 className="nav__options">Movies</h4>
          <h4 className="nav__options">Latest</h4>
          <h4 className="nav__options">My List</h4>
        </div>
        <div className="nav__header__right">
          <img className="nav__options" src={searchIcon} alt="search_logo" />
          <img className="nav__options" src={referIcon} alt="refer_logo" />
          <img
            className="nav__options"
            src={notificationIcon}
            alt="notification_logo"
          />
        </div>
      </div>
      <img
        className="nav__avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="nteflix_logo"
      />
    </div>
  );
}

export default Nav;
