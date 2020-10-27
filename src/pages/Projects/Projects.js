import React from "react";

import Navigation from "../../components/Navigation/Navigation";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="Projects">
      <Navigation />
      <div className="BetterWorld">
        <a href={"https://betterworld-aac7e.web.app"} target={"on_blank"}>
          <img src="/square.png" alt="square" />Better World
        </a>
        <li>Better World lets you to find a charity to donate and save favorite charities on a personal page</li>
        <li>Built with React/Redux</li>
        <li>Deployed via Google Firebase platform</li>
        <li>Responsive web design via Flex-box techniques</li>
        <li>User authenticate system via Google Firebase</li>
        <div className="BetterWorldSlides">
        <input className="prev" type="image" src="/previous.png" alt="previous" onclick="plusSlides(-1)" />
        <input className="next" type="image" src="/next.png" alt="next" onclick="plusSlides(1)" />          
        <img src="/betterworld1.png" alt="betterworld1" />
        </div>
      </div>
    </div>
  )
}

export default Projects;