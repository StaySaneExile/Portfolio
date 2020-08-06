import React from 'react';
import {Field, reduxForm} from 'redux-form';
import styles from "../Contacts/Contacts.module.css";

let ReduxForm =(props)=> {

        const {handleSubmit} = props;
        return (
            <form className={styles.form} onSubmit={props.handleSubmit}>
                <Field
                    className={styles.textarea}
                    name="Username"
                    component="input"
                    type="text"
                    placeholder="Name"
                />
                <Field
                    className={styles.textarea}
                    name="Email"
                    component="input"
                    type="text"
                    placeholder="e-mail"
                />
                <Field
                    className={styles.messageArea}
                    name="Message"
                    component="input"
                    type="text"
                    placeholder="message"
                />
                <button className={styles.button}
                        type="submit" label="submit">Отправить</button>
            </form>
        );
}

ReduxForm = reduxForm ({
    form: 'login',
}) (ReduxForm);

export default ReduxForm;