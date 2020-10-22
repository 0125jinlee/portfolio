import React from "react";

import Navigation from "../../components/Navigation/Navigation";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="Projects">
      <Navigation />
      <div className="BetterWorld">
        <a href={"https://betterworld-aac7e.web.app"} target={"on_blank"}><h3>Better World</h3></a>
        <li>Better World lets you to find a charity to donate and save favorite charities on a personal page</li>
        <li>Built with React/Redux</li>
        <li>Deployed via Google Firebase platform</li>
        <li>Responsive web design via Flex-box techniques</li>
        <li>User authenticate system via Google Firebase</li>
        <img src="/betterworld1.png" alt="betterworld1" />
      </div>
    </div>
  )
}

export default Projects;