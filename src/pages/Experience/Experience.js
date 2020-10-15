import React from "react";
import { NavLink } from "react-router-dom";

import "./Experience.css";

const Experience = () => {
  return (
    <div className="Experience">
      <div className="Title">
        <NavLink className="EnglishTitle" to={"/"}>
          HELLO, I AM JIN WON LEE.
        </NavLink>
      </div>
      <p className="WorkExperience">
      Better World 
      https://betterworld-aac7e.web.app
        ● Better World lets you to find a charity to donate and save favorite charities on a personal page
        ● Built with React/Redux
        ● Deployed via Google Firebase platform
        ● Responsive web design via Flex-box techniques
        ● User authenticate system via Google Firebase
      LanguageLine Solutions​ 
      Interpreter
        ● Provide interpretation service to utility companies, medical facilities, and government agencies
        ● Able to perform under pressure and fast-paced environments
      H Mart Logistics Center​ ​Whittier, CA
      Data Analyst ​April 2018 – August 2019
        ● Collaborated with the purchasing team to make efficient decisions backed by data analysis which led to 12%
        increase in the inventory turn over rate
        ● Increased total revenue by 8% from managing the inventory by analyzing historical sales data
      Verizon Wireless Premium Retail Store: All-Star Wireless
      Assistant Manager Garden Grove, CA June 2016 – June 2017
        ● Trained sales representatives to help them meet the sales goal
        ● Exceeded the sales goal by at least 120% for the four quarters
      Autopart Crew
      Owner ​Anaheim, CA April 2014 – March 2016
        ● B2C sales of imported genuine Hyundai/Kia automotive parts via eCommerce
        ● Maintained a minimum profit of 40% by extensively conducting a competitive analysis against competitors
      </p>
    </div>
  )
}

export default Experience;