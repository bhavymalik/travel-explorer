// Header.js or HomePage.js
import React from 'react';
import { Helmet } from 'react-helmet';

const Header = ({ title }) => (
  <header>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <h1>{title}</h1>
  </header>
);

export default Header;
