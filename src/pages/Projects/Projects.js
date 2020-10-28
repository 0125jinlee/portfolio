import React, { useState } from "react";

import Navigation from "../../components/Navigation/Navigation";
import "./Projects.css";

const Projects = () => {
  
  const [imageCounter, setImageCounter] = useState(1);

  const plusSlides = event => {
    event.preventDefault();
    if ( imageCounter < 4) {
      setImageCounter(imageCounter + 1);
      return imageCounter;
    } else {
      setImageCounter(1);
      return imageCounter;
    }
  }

  const minusSlides = () => {
    if ( imageCounter > 1) {
      setImageCounter(imageCounter - 1);
      return imageCounter;
    } else {
      setImageCounter(4)
      return imageCounter;
    }
  }

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
        <input className="prev" type="image" src="/previous.png" alt="previous" onClick={minusSlides} />
        <input className="next" type="image" src="/next.png" alt="next" onClick={plusSlides} />
        <div className="BetterWorldSlides">
          <img src={"/betterworld" + imageCounter + ".png"} alt="betterworld" />
        </div>
      </div>
    </div>
  )
}

export default Projects;