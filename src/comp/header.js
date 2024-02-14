import { useTranslation } from 'react-i18next';
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import  '../theme.css';
import {useContext } from "react";
import ThemeContext from "../contextapp/context";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firepase/confing';
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const {theme,changetheme} = useContext(ThemeContext);
  const { t, i18n } = useTranslation();


  return (
    <div className={`myheader`}>
      <header className="hide-when-mobile ali">
        <h1>
          <Link to="/" className="logoo">c4a.dev</Link>
        </h1>
        {/* icon to change theme */}
        <i className="fa-solid fa-moon"onClick={()=>{
          changetheme(theme === "light" ? "dark":"light")}}></i>
          <i className="fa-solid fa-sun" onClick={()=>{
          changetheme(theme === "light" ? "dark":"light")}}></i>

        <ul className="flex">

              {/*====chang language ====*/}

              <li className=" main-list scale  "> 
              <ul className="list-lang">
                <li onClick={() => {
  i18n.changeLanguage("ar");
}}
 dir="auto">
                <p>العربيه</p>
                {i18n.language === "ar" &&<i  className="fa-solid fa-check"></i>}
                </li>
                <li onClick={() => {
  i18n.changeLanguage("en");
}}>
                  <p>English</p>
                  {i18n.language === "en" &&<i  className="fa-solid fa-check"></i>}

                </li>
                <li onClick={() => {
  i18n.changeLanguage("fr");
}}>
                  <p>French</p>
                  {i18n.language === "fr" &&<i  className="fa-solid fa-check"></i>}

                </li>
              </ul>
              {t("lang")}
              
              </li>
            {/*====  sign and profile and about ==== */}
          {user &&  
          <li onClick={() => {
            
            signOut(auth).then(() => {
              // Sign-out successful.
            }).catch((error) => {
              // An error happened.
            });
          }}className="main-list">
            <button className="main-link sign-out" >
              {t("signout")}
            </button>
            </li>}
          
      {!user &&  <li className="main-list">
            <NavLink className="main-link" to="/Signin">
              {t("signin")}
            </NavLink>
            </li>}
          {!user&&  <li className="main-list">
            <NavLink className="main-link" to="/Signup">
              {t("signup")}
            </NavLink>
            </li>}
            
            {user&&<li className="main-list">
            <NavLink className="main-link" to="/About">
              {t("support")}
            </NavLink>
            
          
          </li>}
          
          
          {user&&<li className="main-list">
            <NavLink className="main-link" to="/profile">
              {t("account")}
            </NavLink>
            </li>}
        </ul>
      </header>

      {/* <header className="show-when-mobile ali">
        <h1>c4a.dev</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/html">Full Course</NavLink>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">learn in 1h</a>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              CSS <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/css">Full Course</NavLink>
              </li>
              <li>
                <a href="">CSS Examples</a>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/javascript">coming soon🔥</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header> */}
    </div>
  );
};

export default Header;
