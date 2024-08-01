import React from 'react';
import Styles from './Keydis.module.css';
import Image from 'next/image';
// import Styles from  './styles.module.css'

const WhoIsItFor = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.row}>
        <div className={Styles.col}>
          {/* <Image src='/image2.png' alt='Image description' width={300} height={150} className={Styles.image} /> */}
        </div>
        <div className={Styles.col}>
          <h2>Who is it for?</h2>
          <p>The webinar on Cybersecurity Challenges for BFSI Sector in Saudi Arabia is specifically designed and tailored for IT experts, CISOs (Chief Information Security Officers), CIOs (Chief Information Officers), and Security Experts who are involved in or interested in cybersecurity within the Banking, Financial Services, and Insurance (BFSI) sector in Saudi Arabia.</p>
        </div>
      </div>
    </div>
  );
};

export default WhoIsItFor;
