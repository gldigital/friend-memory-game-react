import React from "react";

const Nav = props => (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="/">
            Friend Memory Game
          </a>

          <ul className="nav navbar-nav navbar-right">
            <li>Score: <span>0</span> | </li>
            <li>  Top Score: <span>0</span></li>
          </ul>
        </div>
      </div>
    </nav>
);

export default Nav;