import React from 'react';
import Image from 'next/image';
import Styles from  './Styles.module.css'

const KeyPointDiscussion = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.row}>
        <div className={Styles.textContainer}>
          <h2 className={Styles.h1}>The key points of discussion -</h2>
          <ul className={Styles.ul}>
            <div className={Styles.div}>
              <Image src='/tick.png' alt='tick' width={20} height={20} className={Styles.image} />
              <li className={Styles.li}>Analysis of recent cyber threats and attacks targeting banks and financial institutions in Saudi Arabia.</li>
            </div>
            <div className={Styles.div}>
              <Image src='/tick.png' alt='tick' width={20} height={20} className={Styles.image} />
              <li className={Styles.li}>Overview of the existing regulatory framework and cybersecurity guidelines for BFSI companies in Saudi Arabia.</li>
            </div>
            <div className={Styles.div}>
              <Image src='/tick.png' alt='tick' width={20} height={20} className={Styles.image} />
              <li className={Styles.li}>Discussion on the potential cybersecurity risks associated with the adoption of emerging technologies.</li>
            </div>
            <div className={Styles.div}>
              <Image src='/tick.png' alt='tick' width={20} height={20} className={Styles.image} />
              <li className={Styles.li}>Real-world examples of effective incident response and recovery in the aftermath of cyber incidents.</li>
            </div>
            <div className={Styles.div}>
              <Image src='/tick.png' alt='tick' width={20} height={20} className={Styles.image} />
              <li className={Styles.li}>Strategies for developing a powerful cybersecurity workforce through training, education, and certifications.</li>
            </div>
          </ul>
        </div>
        <div className={Styles.imageContainer}>
          <Image src='/key.png' alt='key points' width={400} height={300} className={Styles.imageKey} />
        </div>
      </div>
    </div>
  );
};

export default KeyPointDiscussion;
