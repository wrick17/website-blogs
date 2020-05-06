import React, { useEffect, Fragment } from 'react';
import { Link } from 'gatsby';
import ThemeSwitch from './theme-switch';

const Header = ({ level, name }) => {
  const navLinks = [
    {
      link: '/',
      label: 'Home',
    },
    {
      link: '/blogs',
      label: 'Blogs',
    },
    {
      label: name,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([ e ]) => e.target.toggleAttribute('stuck', e.intersectionRatio < 1),
      { threshold: [ 1 ] },
    );

    observer.observe(document.querySelector('.stuck'));
  }, []);

  const selectedItems = navLinks.slice(0, level);

  return (
    <Fragment>
      <div className="stuck" />
      <header>
        <div className="container">
          <nav className="header-box">
            <ul className="links">
              {selectedItems.map((navLink, idx) => {
                if (idx === selectedItems.length - 1) {
                  return (
                    <li>
                      <span key={navLink.label}>{navLink.label}</span>
                    </li>
                  );
                }
                else {
                  return (
                    <li key={navLink.label}>
                      <Link to={navLink.link}>{navLink.label}</Link>
                      {idx !== selectedItems.length - 1 ? (
                        <div className="divider">{'>'}</div>
                      ) : null}
                    </li>
                  );
                }
              })}
            </ul>
            <ThemeSwitch />
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
