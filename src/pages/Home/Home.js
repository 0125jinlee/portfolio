import React from "react";

import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="Title">
        <h1 className="EnglishTitle">HELLO, I AM JIN WON LEE.</h1>
        <h1 className="KoreanTitle">안녕하세요, 저는 이진원 입니다.</h1>
      </div>
      <div className="SocialMedia">
        <button
          type="button"
          target="_blank"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://www.instagram.com/jin.won.lee/";
          }}
        >
          <img src="/instagram.png" width="60px" alt="Jin's Instagram" />
        </button>
        <button
          type="button"
          target="_blank"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://www.linkedin.com/in/jin-won-lee-94731439/";
          }}
        >
          <img src="/linkedin.png" width="60px" alt="Jin's LinkedIn" />
        </button>
        <button
          target="_blank"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://github.com/0125jinlee";
          }}
        >
          <img src="/github.png" width="60px" alt="Jin's GitHub" />
        </button>
      </div>
    </div>
  );
};

export default Home;
