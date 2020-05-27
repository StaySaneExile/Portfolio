import React from 'react';
import styles from './Contacts.module.css';


function Contacts () {
    return (
        <div className={styles.main}>
            <div className={styles.contacts}>
                <h3>Contacts</h3>
                <form className={styles.form}>
                    <textarea className={styles.textarea}></textarea>
                    <textarea className={styles.textarea}></textarea>
                    <textarea className={styles.textarea}></textarea>
                </form>



            </div>


        </div>
    );
}

export default Contacts;
