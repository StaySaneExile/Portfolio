import React from 'react';
import styles from './Slogan.module.css';
import {Fade} from "react-reveal";
import BlockTitle from "../BlockTitle";

function Slogan() {
    return (
        <div className={styles.slogan}>
            <Fade>
                <div className={styles.main}>
                    <BlockTitle title={'I am considering work in another city'}/>

                </div>
            </Fade>
        </div>
    );
}

export default Slogan;
