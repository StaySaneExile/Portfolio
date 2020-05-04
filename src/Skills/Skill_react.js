import React from 'react';
import styles from './Skill_react.module.css';


function Skill (props) {
  return (
      <div className={styles.skill}>{props.skill}
        <div className={styles.icon}></div>
        <h3>{props.title}</h3>
        <span className={styles.discription}>
          {props.discription}
        </span>

      </div>
  );
}

export default Skill;
