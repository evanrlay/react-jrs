import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css';

import logo from './nbbpvi.png';
 
export class Navigation extends Component {
  render() {
    return (
      <div className="nav">
          <nav>
            <img className="logo" src={logo} alt="NBBPVI Logo" />
            <NavLink activeClassName="active" className="link" to="/users">Users</NavLink>
            <NavLink activeClassName="active" className="link" to="/equipment">Equipment</NavLink>
            <NavLink activeClassName="active" className="link" to="/jurisdictions">Jurisdictions</NavLink>
            <NavLink activeClassName="active" className="link" to="/insurance-carriers">Insurance</NavLink>
        </nav>
      </div>
    );
  }
}