import React from 'react';
import styles from './Contacts.module.css';
import BlockTitle from "../BlockTitle";
import ReduxForm from "../Form/Form";
import axios from 'axios'


function Contacts() {
    const submit = (data) => {
        axios.post('http://localhost:3005/sendMessage', {data})
            .then((res)=> {
                console.log(res)
            })
    };

    return (
        <div className={styles.main}>
            <div className={styles.contacts}>
                <BlockTitle title={"Contacts"}/>
                <ReduxForm onSubmit={submit}/>
            </div>


        </div>
    );
}

export default Contacts;
