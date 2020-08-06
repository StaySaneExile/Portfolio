import React from 'react';
import styles from './Footer.module.css';
import telegramIcon from './../image/telegram.png'
import gitHubIcon from './../image/github.png'

function Footer () {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <span className={styles.title}></span>
                <div className={styles.socialBlock}>
                    <div className={styles.icon}>
                        <a href=''>
                            <img src={telegramIcon} alt=''/>
                        </a>
                    </div>
                    <div className={styles.icon}>
                        <a href=''>
                            <img src={gitHubIcon} alt=''/>
                        </a>
                    </div>
                    <div className={styles.icon}>

                    </div>
                    <div className={styles.icon}>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
