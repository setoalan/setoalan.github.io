import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: `0 auto`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{ textDecoration: `none` }}>
          {siteTitle}
        </Link>
      </h1>
      <div>
        <Link to="/" style={{ textDecoration: `none` }}>
          about
        </Link>
        <Link to="/" style={{ marginLeft: '1rem', textDecoration: `none` }}>
          contact me
        </Link>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ''
};

export default Header;
