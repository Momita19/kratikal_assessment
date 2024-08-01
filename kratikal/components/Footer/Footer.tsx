import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

const Click = () => {
  return (
    <div className={styles.clickContainer}>
      <Image 
        alt='Contact Us For All Your Cybersecurity Needs' 
        width={1400} 
        height={500} 
        src='https://threatcop.com/_next/static/media/head-foot.4ca91a8a.webp' 
        className={styles.imageFooter}
      />
      <div className={styles.overlay}>
        <h1 className={styles.h1}>Contact Us For All Your Cybersecurity Needs</h1>
        <div className={styles.buttonarrow}>
          <button className={styles.button}>Click Here</button>
          <div className={styles.arrow}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Click;
