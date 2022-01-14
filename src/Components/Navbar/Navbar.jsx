// This file exports the main Navbar component which we can see on the Top of the screen
// The contents of the Navbar are imported from Navbar Items file

import React, { Component } from "react";
import { NavbarItems } from "./NavbarItems";
import "./Navbar.css";
import LocalMallRoundedIcon from "@material-ui/icons/LocalMallRounded";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";

export default class Navbar extends Component {
  render() {
    return (
      <div className="MyNav">
        <div className="CompanyLogoImage">
          <img src="#" alt="Company Logo" />
        </div>
        <ul className="NavList">
          {/* <li>{NavbarItems.length}</li> */}
          {NavbarItems.map((item) => (
            <div>
              <li className="listItem">
                <a className="listItem" href={item.link}>
                  {item.content}
                </a>
              </li>
            </div>
          ))}
        </ul>
        <PersonOutlineRoundedIcon
          style={{ marginLeft: "50px", marginRight: "10px" }}
        />
        <LocalMallRoundedIcon style={{}} />
      </div>
    );
  }
}
