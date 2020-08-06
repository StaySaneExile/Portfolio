import React from 'react';
import styles from './Skill_react.module.css';


function Skill (props) {
  return (
      <div className={styles.skill}>{props.skill}
        <div className={styles.icon}>
            <img src={props.icon} alt=''/>
        </div>
        <h3 className={styles.skill_title}>{props.title}</h3>
        <span className={styles.description}>
          {props.discription}
        </span>

      </div>
  );
}

export default Skill;
