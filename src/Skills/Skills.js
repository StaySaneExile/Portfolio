import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill_react";
import react from './../image/react.png';
import reactIcon from './../image/reactIcon.png';
import mobxIcon from './../image/mobx.png';
import reduxIcon from './../image/redux.png';
import Fade from 'react-reveal/Fade';
import BlockTitle from "../BlockTitle";


function Skills() {
    return (
        <div className={styles.skillsBlock}>
            <Fade clear>
                <div className={styles.container}>
                    <BlockTitle title={'My skills'} />
                    <div className={styles.skills}>
                        <Skill icon={reactIcon} title={'React.js'} discription={''}/>
                        <Skill title={'TypeScript'}/>
                        <Skill icon={mobxIcon} title={'Mob-X'}/>
                        <Skill icon={reduxIcon} title={'Redux'}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;
