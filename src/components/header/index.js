import React from 'react';

import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <h1>RESTy-ful Knight</h1>
          <h3>A Postman copycat</h3>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/results">Results</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><a target="_blank" href="https://en.wikipedia.org/wiki/Representational_state_transfer">Additional Resource</a></li>
            </ul>
          </nav>
          
        </header>
      </>
    );
  }
}

export default Header;
