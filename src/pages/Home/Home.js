import React from "react";
import { NavLink } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
    <span>
      <div className="Title">
        <NavLink className="EnglishTitle" to={"/"}>
          HELLO, I AM JIN WON LEE.
        </NavLink>
      </div>
      <div className="Navigation">
        <NavLink to={"/About"}>
          About
        </NavLink>
        <NavLink to={"/Experience"}>
          Experience
        </NavLink>
      </div>
      <div className="JinPicture">
        <img src="/jin.jpeg" alt="Jin Won Lee" />
      </div>
      <div className="SocialMedia">
        <a href = {"https://www.instagram.com/jin.won.lee/"} target = {"_blank"} rel = {"noopener noreferrer"}>
          <img src="/instagram.png" alt="Jin's Instagram" />
        </a>
        <a href = {"https://www.linkedin.com/in/jin-won-lee-94731439/"} target = {"_blank"} rel = {"noopener noreferrer"}>
          <img src="/linkedin.png" alt="Jin's LinkedIn" />
        </a>
        <a href = {"https://github.com/0125jinlee"} target = {"_blank"} rel = {"noopener noreferrer"}>
          <img src="/github.png" alt="Jin's GitHub" />
        </a>
      </div>
    </span>
  );
};

export default Home;
