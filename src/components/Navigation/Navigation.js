import React from 'react';
import { NavLink } from "react-router-dom";
import MediaQuery from "react-responsive";

import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="Navigation">
      <div className="Title">
        <MediaQuery query="(min-device-width: 376px)">
          <NavLink to={"/"} exact={true}>HELLO, I AM <span className="Name">JIN WON LEE.</span></NavLink>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 375px)">
          <NavLink to={"/"} exact={true}>HELLO,<br/>I AM<br /><span className="Name">JIN WON LEE.</span></NavLink>
        </MediaQuery>
      </div>
      <div className="Pages">
        <NavLink to={"/About"} exact={true}>
          <img src="/square.png" alt="square" />
          About
        </NavLink>
        <NavLink to={"/Projects"} exact={true}>
          <img src="/square.png" alt="square" />
          Projects
        </NavLink>
      </div>
    </div>
  )
}

export default Navigation;