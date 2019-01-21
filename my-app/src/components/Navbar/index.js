import React from "react";
import "./style.css";

const NavBar = props =>
    <nav className="nav-bar">
        <ul>
            <li className="logo">CLick Game</li>
            <li className="middle"> CLick on Image to begin</li>

            <li className="score" >Score:{props.score} </li>

            <li className="topScore" >Top Score: {props.topScore}</li>
        </ul>
    </nav>


export default NavBar;