import React from "react";
import "./header.scss";
import logo from "./Britlex.png";
import menu from "./Group 28.png"

export default class Header extends React.Component{
    render(){
        return (
            
            <header className="header">
                <div className="logo"><img src={logo} alt="logo"/></div>
                <div className="menu"><img src={menu} alt="menu"/></div> 
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Skills</a>
                    <a href="#">About Us</a>
                    <a href="#">Pricing</a>
                    <a href="#">Contacts</a>
                </nav>
                <div className="header-button">Let’s Talk</div>
            </header>       
        )
    }
}