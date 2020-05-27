import React from 'react';
import styles from './Footer.module.css';

function Footer () {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <span className={styles.title}></span>
                <div className={styles.socialBlock}>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                    <div className={styles.icon}></div>
                </div>
                <span className={styles.copyright}>dct ghfdf </span>
            </div>
        </div>
    );
}

export default Footer;
