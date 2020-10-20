import React from 'react';
import { NavLink } from "react-router-dom";

import "./About.css";

const About = () => {
  return (
    <div className="About">
      <div className="Title">
        <NavLink to={"/"} exact={true}>
          HELLO, I AM JIN WON LEE.
        </NavLink>
      </div>
      <div className="Navigation">
        <NavLink to={"/About"} exact={true}>
          About
        </NavLink>
        <NavLink to={"/Experience"} exact={true}>
          Experience
        </NavLink>
      </div>
      <div className="Story">
         I received my Bachelor of Science in Mathematics/Economics major from University of California, Los Angeles recently. My higher education journey took longer than the other usual students. Whenever I did not have enough money for the tuition, I took a break as I was not eligible for any financial aid or loans. Although I was not pleasant with this situation, I grew and reinforced soft skills from working for 15 different jobs.<br />
         I pushed myself to work in as many fields as possible because I learned many lessons from each of those challenges and those lessons added up to shape who I am right now. When I  was working as an assistant chef at Japanese restaurant, I never knew that this experience would train me to be a detail-oriented person. When I was working as a data analyst at H Mart, I did not know that the experience with Excel would be an eye-opener for a beauty of automation and later change the direction of my career path to the world of coding.<br />
         I learned that each individual's worth is strictly calculated based on how many skills one has on the belt. Now, I work as an interpreter to strengthen my communication skill as I think it is the skill that I need to work on the most. Also, I have been studying coding and working on the projects for my portfolio using React framework with HTML, CSS and JavaScript to increase my worth in the job market.<br />
      </div>
    </div>
  )
}

export default About;