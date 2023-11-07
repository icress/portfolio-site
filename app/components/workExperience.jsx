import styles from '../work.module.css'
import {motion, MotionConfig} from 'framer-motion'

export const workExperiences = [
    {
      companyLogo: 'company.png',
      position: 'Position 1',
      info: 'Information about Position 1',
    },
    {
      companyLogo: 'company_logo2.png',
      position: 'Position 2',
      info: 'Information about Position 2',
    },
    // Add more work experiences as needed
  ];
  
  export function WorkExperience({ companyLogo, position, info }) {
    return (
      <div className={styles.work_experience}>
        <div className={styles.company_logo}>
          <img src={companyLogo} alt={position} />
        </div>
        <div className={styles.position_info}>
          <h2>{position}</h2>
          <p>{info}</p>
        </div>
      </div>
    );
  };