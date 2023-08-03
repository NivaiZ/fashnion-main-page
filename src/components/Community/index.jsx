import styles from './community.module.less';
import { Formik, Field, Form } from 'formik';

export default function Community() {
    return (
        <section className={styles.community}>
            <div className={styles.community__wrapper}>

                <ul className={styles.community__list}>

                    <li className={styles.community__item}>
                        <h4 className={styles.community__heading}>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h4>
                    </li>

                    <li className={styles.community__item}>
                        <p className={styles.community__text}>Type your email down below and be young wild generation</p>
                    </li>

                    <li className={`${styles.community__item} ${styles.community__more}`}>
                        <Formik
                            initialValues={{
                                community__email: '',
                            }}
                            onSubmit={async (values) => {
                                await new Promise((r) => setTimeout(r, 500));
                                alert(JSON.stringify(values, null, 2));
                            }}
                        >
                            <Form className={styles.community__form}>
                                <ul className={styles.community__inner}>
                                    <li className={styles.community__item}>
                                        <label htmlFor="community__email" className={styles.community__label}></label>
                                    </li>

                                    <li className={styles.community__item}>
                                        <Field id="community__email" name="community__email" className={styles.community__input} placeholder="Add your email here"/>
                                    </li>

                                    <li className={styles.community__item}>
                                        <button className={styles.community__button} type='submit'>
                                            <span className={styles.community__sign}>Send</span>
                                        </button>
                                    </li>

                                </ul>
                            </Form>
                        </Formik>
                    </li>
                </ul>
            </div>
        </section>

    )
}