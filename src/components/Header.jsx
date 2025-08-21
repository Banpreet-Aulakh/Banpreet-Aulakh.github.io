import React from 'react';
import { NavLink } from 'react-router-dom';
import linkedinIcon from '../assets/linkedin-svgrepo-com.svg';
import githubIcon from '../assets/Octicons-mark-github.svg';

const Header = () => {
  return (
    <header>
      <h1>
        <span className="first-name">Banpreet</span>{' '}
        <span className="last-name">Aulakh</span>
      </h1>
      <h2>Computing Science Student @ Simon Fraser University</h2>
      <nav>
        <ul>
          <li>
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/experience"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/courses"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Coursework
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="socials">
        <a 
          href="https://www.linkedin.com/in/banpreetaulakh/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn Link" />
        </a>
        <a 
          href="https://github.com/Banpreet-Aulakh" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub Link" />
        </a>
      </div>
    </header>
  );
};

export default Header;
