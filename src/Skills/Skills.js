import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill_react";

function Skills() {
    return (
        <div className={styles.main}>
            <div className={styles.mainContainer}>
                <div className={styles.skills}>
                    <h2>MY SKILLS</h2>
                </div>
                <Skill title={'react'} skill={'react'} discription={'qweqweqdadasdasdsfsfsdsdfdsfsfdseqweqwe'}/>
                <Skill title={'JS'} skill={'JS'}/>
                <Skill title={'CSS'} skill={'CSS'}/>


            </div>
        </div>
    );
}

export default Skills;
