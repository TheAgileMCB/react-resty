import React from 'react';

import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <h1>RESTy-ful Knight</h1>
          <h3>A Postman copycat</h3>
          <nav className="nav">
            <p><NavLink to="/" exact>Home</NavLink></p>
            <p><NavLink to="/results">Results</NavLink></p>
            <p><NavLink to="/about">About Us</NavLink></p>
            <p><a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Representational_state_transfer">Additional Resource</a></p>
          </nav>

        </header>
      </>
    );
  }
}

export default Header;
