import React, { Component } from "react";
import style from "./style.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../logo.svg";
import "../../index.css";

export default class HeaderComponent extends Component {
  render() {
    return (
      <section className={style.sideMenu_Container} id="sideMenu">
        <section>
          <div>
            <NavLink to="/home">
              <img src={logo} />
            </NavLink>
          </div>
        </section>
        <section className={style.icons_container}>
          <div className={style.navLink_container}>
            <NavLink to="/home" activeClassName="selected">
              <i class="fas fa-home unselected" />
            </NavLink>
          </div>
          <div className={style.navLink_container}>
            <NavLink to="/notifications" activeClassName="selected">
              <i className="fas fa-bell unselected" />
            </NavLink>
          </div>
          <div className={style.navLink_container}>
            <NavLink to="/profile" activeClassName="selected">
              <i class="fas fa-address-card unselected" />
            </NavLink>
          </div>
        </section>
        <section className={style.profile_section}>
          <div className={style.profileContainer}>
            <i class="fas fa-user-circle" />
          </div>
          <p>feedback</p>
        </section>
      </section>
    );
  }
}
