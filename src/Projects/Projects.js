import React from 'react';
import styles from './Projects.module.css';

function Projects() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <span className={styles.title}>MY Projects</span>
                <div className={styles.projectWrapper}>
                    <div className={styles.project}>
                        <div className={styles.projectImg}>
                            <a className={styles.btnShow} href=''>smotret'</a>
                        </div>
                        <span className={styles.projectTitle}>todolist</span>
                        <span className={styles.description}>rhjjhgjgjtju</span>
                    </div>
                    <div className={styles.project}>
                        <div className={styles.projectImg}>
                            <a className={styles.btnShow} href=''>smotret'</a>
                        </div>
                        <span className={styles.projectTitle}>todolist</span>
                        <span className={styles.description}>rhjjhgjgjtju</span>
                    </div>
                    <div className={styles.project}>
                        <div className={styles.projectImg}>
                            <a className={styles.btnShow} href=''>smotret'</a>
                        </div>
                        <span className={styles.projectTitle}>todolist</span>
                        <span className={styles.description}>rhjjhgjgjtju</span>
                    </div>
                </div>

            </div>


        </div>
    );
}

export default Projects;
