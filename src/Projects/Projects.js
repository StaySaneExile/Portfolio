import React from 'react';
import styles from './Projects.module.css';
import Fade from 'react-reveal/Fade';
import BlockTitle from "../BlockTitle";

function Projects() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <Fade clear>
                    <BlockTitle title={'My projects'}/>
                    <div className={styles.projectWrapper}>
                        <div className={styles.project}>
                            <div className={styles.projectImgTodo}>
                                <a className={styles.btnShow} href='https://StaySaneExile.github.io/TodoList'>Show</a>
                            </div>
                            <span className={styles.projectTitle}>todolist</span>
                            <span className={styles.description}>React/redux</span>
                        </div>
                        <div className={styles.project}>
                            <div className={styles.projectImgSocial}>
                                <a className={styles.btnShow} href=''>Show</a>
                            </div>
                            <span className={styles.projectTitle}>Social Network</span>
                            <span className={styles.description}>React/redux</span>
                        </div>
                        <div className={styles.project}>
                            <div className={styles.projectImgCounter}>
                                <a className={styles.btnShow} href='https://StaySaneExile.github.io/Pizzeria'>Show</a>
                            </div>
                            <span className={styles.projectTitle}>Pizzeria</span>
                            <span className={styles.description}>React/redux</span>
                        </div>
                        <div className={styles.project}>
                            <div className={styles.projectImgExchanger}>
                                <a className={styles.btnShow} href='https://staysaneexile.github.io/CurrencyExchanger-MobX/'>Show</a>
                            </div>
                            <span className={styles.projectTitle}>Currency exchanger</span>
                            <span className={styles.description}>MobX/redux</span>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Projects;
