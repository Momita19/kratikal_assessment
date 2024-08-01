import React from 'react';
import styles from './Body.module.css';
import Image from 'next/image';

const Body = () => {
  return (
    <div className={styles.eventContainer}>
      <div className={styles.eventHeader}>
        <div>
        <div>
        <h4>Upcoming Event</h4>
        <h1>Social Engineering for <br/> BFSI Sector</h1>
        <p>Ongoing and CyberFuture</p>
      </div>
      <div className={styles.countdownContainer}>
        <div className={styles.countdown}>
          <span>07</span> : <span>24</span> : <span>20</span> : <span>32</span>
        </div>
        <button className={styles.registerButton}>Register Now</button>
      </div>
      </div>
      
      <div>
        <Image width={400} height={400} src='/body.png' alt='threatcoper timer'/>
      </div>
      </div>
      <div className={styles.eventDetails}>
        <div className={styles.detailBox}>
          <h5>Webinar Time</h5>
          <p>09th AUG 2023 @ 03:00 PM (AST)</p>
        </div>
        <div className={styles.detailBox}>
          <h5>BFSI Sector</h5>
        </div>
        <div className={styles.detailBox}>
          <h5>About the webinar</h5>
          <p>
            The webinar will delve into the intricacies of the BFSI (Banking,
            Financial Services, and Insurance) sectors cybersecurity landscape
            in Saudi Arabia, exploring both the current challenges and the
            future threats that lie ahead.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;