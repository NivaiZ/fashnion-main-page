import styles from './banner.module.less';

export default function Banner() {
    return (
        <section className={styles.banner}>
            <div className={`${styles.banner__wrapper} container`}>
                <ul className={`${styles.banner__list} ${styles.banner__more}`}>
                    <li className={styles.banner__item}>
                        <img src='../../../public/assets/images/promo-img.png' className={styles.banner__image} />
                    </li>

                    <li className={`${styles.banner__item} ${styles.banner__top}`}>
                        <ul className={styles.banner__group}>

                            <li className={styles.banner__item}>
                                <p className={`${styles.banner__text} ${styles.banner__white}`}>PAYDAY</p>
                            </li>

                            <li className={styles.banner__item}>
                                <p className={styles.banner__text}>SALE NOW</p>
                            </li>

                        </ul>

                        <ul className={`${styles.banner__inner} ${styles.banner__bottom}`}>
                            <li className={styles.banner__item}>
                                <p className={styles.banner__description}>Spend minimal $100 get 30% off
                                    voucher code for your next purchase</p>
                            </li>

                            <li className={styles.banner__item}>
                                <p>
                                    <span className={styles.banner__discount}><time dateTime='2021-06-01'>1 June</time> - <time dateTime='2021-06-10'>10 June 2021</time></span>
                                </p>
                            </li>

                            <li className={styles.banner__item}>
                                <p className={styles.banner__terms}>*Terms & Conditions apply</p>
                            </li>
                        </ul>

                        <ul className={`${styles.banner__list} ${styles.banner__flex}`}>

                            <li className={styles.banner__item}>
                                <a className={`${styles.banner__modal} modal`} href='/'>
                                    <span className='modal__sign'>Shop Now</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    )
}