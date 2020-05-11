import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-info navbar-expand-lg">
        <Link to="/" className="navbar-brand">UW ISPE EVENTS</Link>
      </nav>
    );
  }
}