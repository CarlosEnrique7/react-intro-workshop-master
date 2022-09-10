import React from "react";
import "./Banner.css";

const Banner = (props) => {
  return (
    <div className="banner-section">
      <div className="text">
        <h2 className="title">
          Hello, I am <span>{props.fullName}</span>
        </h2>
        <p className="description">{props.desc}</p>
        <div className="icons">
          <a href={props.github}>
            <i className="fa-brands fa-github"></i>
          </a>
          <a href={props.linkedin}>
            <i className="fa-brands fa-linkedin "></i>
          </a>
        </div>
      </div>
      <img className="image" src={props.image} alt="profile image" />
    </div>
  );
};

export default Banner;
