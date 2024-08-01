import React from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <a className="navbar-brand" href="#">
        <Image src="https://threatcop.com/_next/static/media/head-foot.4ca91a8a.webp" width={201} height={77} alt="kratikal logo" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Product</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Solutions</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Free Tools</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Resources</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Partner</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Company</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
