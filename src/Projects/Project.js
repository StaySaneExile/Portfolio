import React from 'react';

function Project(props) {
    return (
        <div className={styles.project}>
            <div className={styles.projectImg} {/*style={props.style}*/}>
                <a className={styles.btnShow} href=''>smotret'</a>
            </div>
            <span className={styles.projectTitle}>{props.title}</span>
            <span className={styles.description}>rhjjhgjgjtju</span>
        </div>

    );
}

export default Project;
