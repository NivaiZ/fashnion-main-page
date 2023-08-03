import styles from './vouchers.module.less';

export default function Vouchers() {
    return (
        <section className={`${styles.vouchers} container__vouchers`}>
            <div className={styles.vouchers__inner}>

                <ul className={`${styles.vouchers__list} ${styles.vouchers__group}`}>
                    <li className={styles.vouchers__item}>
                        <h3 className={styles.vouchers__heading}>DOWNLOAD APP &
                            GET THE VOUCHER!</h3>
                    </li>

                    <li className={`${styles.vouchers__item} ${styles.vouchers__margin}`}>
                        <p className={styles.vouchers__discount}>Get 30% off for first transaction using
                            Rondovision mobile app for now.</p>
                    </li>

                    <li className={`${styles.vouchers__item} ${styles.vouchers__block}`}>
                        <a className={styles.vouchers__link} href='/'>
                            <div className={styles.vouchers__box}>
                                <img className={styles.vouchers__image} src='/src/assets/icons/app-store.png' />
                            </div>
                        </a>

                        <a className={styles.vouchers__link} href='/'>
                            <div className={styles.vouchers__box}>
                                <img className={styles.vouchers__image} src='/src/assets/icons/google-play.png' />
                            </div>
                        </a>

                    </li>
                </ul>

                <ul className={styles.vouchers__list}>
                    <li className={styles.vouchers__item}>
                        <div className={styles.vouchers__picture}>
                            <img className={styles.vouchers__img} src='/src/assets/images/vouchers-img.png' alt="voucher__picture" />
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}