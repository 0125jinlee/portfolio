import React from "react";
import { NavLink } from "react-router-dom";

import "./Experience.css";

const Experience = () => {
  return (
    <div className="Experience">
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
      <div className="WorkExperience">
        Better World<br />
        https://betterworld-aac7e.web.app<br />
          ● Better World lets you to find a charity to donate and save favorite charities on a personal page<br />
          ● Built with React/Redux<br />
          ● Deployed via Google Firebase platform<br />
          ● Responsive web design via Flex-box techniques<br />
          ● User authenticate system via Google Firebase<br />
          <br />
        LanguageLine Solutions​<br /> 
        Interpreter<br />
          ● Provide interpretation service to utility companies, medical facilities, and government agencies<br />
          ● Able to perform under pressure and fast-paced environments<br />
          <br />
        H Mart Logistics Center​ ​Whittier, CA<br />
        Data Analyst ​April 2018 – August 2019<br />
          ● Collaborated with the purchasing team to make efficient decisions backed by data analysis which led to 12%<br />
          increase in the inventory turn over rate<br />
          ● Increased total revenue by 8% from managing the inventory by analyzing historical sales data<br />
          <br />
        Verizon Wireless Premium Retail Store: All-Star Wireless<br />
        Assistant Manager Garden Grove, CA June 2016 – June 2017<br />
          ● Trained sales representatives to help them meet the sales goal<br />
          ● Exceeded the sales goal by at least 120% for the four quarters<br />
          <br />
        Autopart Crew<br />
        Owner ​Anaheim, CA April 2014 – March 2016<br />
          ● B2C sales of imported genuine Hyundai/Kia automotive parts via eCommerce<br />
          ● Maintained a minimum profit of 40% by extensively conducting a competitive analysis against competitors<br />
      </div>
    </div>
  )
}

export default Experience;