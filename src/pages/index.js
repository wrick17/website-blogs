import React from 'react';
import { Link } from 'gatsby';
import Layout from '@components/layout';

import face from '@images/wrick.png';
import github from '@images/github.svg';
import twitter from '@images/twitter.svg';
import instagram from '@images/instagram.svg';
import android from '@images/android.svg';
import facebook from '@images/facebook.svg';
import email from '@images/email.svg';

import '@css/home.css';

const links = [
  // {
  //   href: '/blogs',
  //   image: blog,
  //   alt: 'Pratyush Poddar Blog Link',
  //   sameSite: true,
  // },
  {
    href: 'https://github.com/wrick17',
    image: github,
    alt: 'Pratyush Poddar Github Link',
  },
  {
    href: 'https://twitter.com/wrick7132',
    image: twitter,
    alt: 'Pratyush Poddar Twitter Link',
  },
  {
    href: 'https://www.instagram.com/wrick17',
    image: instagram,
    alt: 'Pratyush Poddar Instagram Link',
  },
  {
    href: 'https://forum.xda-developers.com/member.php?u=4850160',
    image: android,
    alt: 'Pratyush Poddar Xda Link',
  },
  {
    href: 'https://www.facebook.com/pratyush.poddar.5',
    image: facebook,
    alt: 'Pratyush Poddar Facebook Link',
  },
  {
    href: 'mailto:wrick17@gmail.com',
    image: email,
    alt: 'wrick17@gmail.com',
  },
];

const projects = [
  {
    title: 'CMDb',
    link: 'https://cmdb.wrick17.com/',
  },
  {
    title: 'jQuery Calendar Plugin',
    link: 'https://calendar.wrick17.com/',
  },
  {
    title: 'Slider Puzzle',
    link: 'https://slideitup.wrick17.com/',
  },
  {
    title: 'NoChatting',
    link: 'https://nochatting.wrick17.com/',
  },
];

const IndexPage = () => (
  <Layout noHeader>
    <div className="center home-layout">
      <div className="topper">
        <div className="content">
          <img src={face} alt="wrick17" className="face-logo" />
          <h1 className="home-name">Pratyush Poddar</h1>
        </div>
      </div>
      <div className="white">
        <div className="content">
          <h2 className="secondary-title">Web Developer</h2>
          <p className="home-content">
            Hi, I am Pratyush, a spider on the Web. When I am not{" "}
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            -ing to JS, I am either listening to Music, Gaming or watching
            Anime.
          </p>
          <div className="spacer" />
          <h4 className="tertiary-title">Catch me on the interwebs below</h4>
          <ul className="social-links">
            {links.map(({ href, image, alt, sameSite }) => (
              <li key={alt}>
                {sameSite ? (
                  <Link title={alt} to={href} className="no-link-color">
                    <img className="social" src={image} alt={alt} />
                  </Link>
                ) : (
                  <a
                    title={alt}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-link-color"
                  >
                    <img className="social" src={image} alt={alt} />
                  </a>
                )}
              </li>
            ))}
          </ul>
          <div className="blog-link">
            Maybe Read my
            <Link to="/blogs" className="no-link-color">
              <button>Blog</button>
            </Link>
          </div>
          <div className="blog-link">
            <h3>Or check out my fun little Projects</h3>
            {projects.map(({ title, link }) => (
              <span key={title} className="project">
                <Link to={link} target="_blank" rel="noopener noreferrer">
                  {title}
                </Link>
                <span className="v-spacer" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
