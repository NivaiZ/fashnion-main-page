import styles from './footer.module.less';
import { ReactComponent as LogoFB } from '../../../public/assets/socials/fb.svg';
import { ReactComponent as LogoInstagram } from '../../../public/assets/socials/inst.svg';
import { ReactComponent as LogoTwitter } from '../../../public/assets/socials/tw.svg';
import { ReactComponent as LogoLinkedin } from '../../../public/assets/socials/in.svg';


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.footer__wrapper} container`}>
                <div className={styles.footer__inner}>


                    <ul className={`${styles.footer__list} ${styles.footer__column}`}>
                        <li className={`${styles.footer__item} ${styles.footer__left}`}>
                            <a className={styles.footer__logo} href='/'>
                                Fashion
                            </a>
                        </li>

                        <li className={styles.footer__item}>
                            <p className={styles.footer__text}>Complete your style with awesome clothes from us.</p>
                        </li>
                    </ul>

                    <ul className={`${styles.footer__list} ${styles.footer__row}`}>

                        <li className={`${styles.footer__left__padding} ${styles.footer__box}`}>
                            <a className={styles.footer__link} href='/'>
                                <LogoFB />
                            </a>
                        </li>

                        <li className={`${styles.footer__left__padding} ${styles.footer__box}`}>
                            <a className={styles.footer__link} href='/'>
                                <LogoInstagram />
                            </a>
                        </li>

                        <li className={`${styles.footer__left__padding} ${styles.footer__box}`}>
                            <a className={styles.footer__link} href='/'>
                                <LogoTwitter />
                            </a>
                        </li>

                        <li className={`${styles.footer__left__padding} ${styles.footer__box}`}>
                            <a className={styles.footer__link} href='/'>
                                <LogoLinkedin />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={styles.footer__wrap}>

                    <ul className={`${styles.footer__list} ${styles.footer__more} ${styles.footer__column}`}>

                        <li className={`${styles.footer__item} ${styles.footer__padding}`}>
                            <a className={`${styles.footer__link} ${styles.footer__legend}`} href='/'>
                                Company
                            </a>
                        </li>

                        <li className={`${styles.footer__item} ${styles.footer__padding}`}>
                            <a className={`${styles.footer__link} ${styles.footer__menu}`} href='/'>
                                About
                            </a>
                        </li>

                        <li className={`${styles.footer__item} ${styles.footer__padding}`}>
                            <a className={`${styles.footer__link} ${styles.footer__menu}`} href='/'>
                                Contact us
                            </a>
                        </li>

                        <li className={`${styles.footer__item} ${styles.footer__padding}`}>
                            <a className={`${styles.footer__link} ${styles.footer__menu}`} href='/'>
                                Support
                            </a>
                        </li>

                        <li className={`${styles.footer__item} ${styles.footer__padding}`}>
                            <a className={`${styles.footer__link} ${styles.footer__menu}`} href='/'>
                                Careers
                            </a>
                        </li>
                    </ul>

                    <ul className={`${styles.footer__list} ${styles.footer__more} ${styles.footer__column}`}>

                        <li className={`${styles.footer__item} ${styles.footer__padding}`}>
                            <a className={`${styles.footer__link} ${styles.footer__legend}`} href='/'>
                                Quick Link
                            </a>
                        </li>

                        <li className={`${styles.footer__item} ${styles.footer__padding}`}>
                            <a className={`${styles.footer__link} ${styles.footer__menu}`} href='/'>
                                Share Location
                            </a>
                        </li>

                        <li className={`${styles.footer__item} ${styles.footer__padding}`}>
                            <a className={`${styles.footer__link} ${styles.footer__menu}`} href='/'>
                                Orders Tracking
                            </a>
                        </li>

                        <li className={`${styles.footer__item} ${styles.footer__padding}`}>
                            <a className={`${styles.footer__link} ${styles.footer__menu}`} href='/'>
                                Size Guide
                            </a>
                        </li>

                        <li className={`${styles.footer__item} ${styles.footer__padding}`}>
                            <a className={`${styles.footer__link} ${styles.footer__menu}`} href='/'>
                                FAQs
                            </a>
                        </li>
                    </ul>

                    <ul className={`${styles.footer__list} ${styles.footer__more} ${styles.footer__column}`}>

                        <li className={`${styles.footer__item} ${styles.footer__padding}`}>
                            <a className={`${styles.footer__link} ${styles.footer__legend}`} href='/'>
                                Legal
                            </a>
                        </li>

                        <li className={`${styles.footer__item} ${styles.footer__padding}`}>
                            <a className={`${styles.footer__link} ${styles.footer__menu}`} href='/'>
                                Terms & conditions
                            </a>
                        </li>

                        <li className={`${styles.footer__item} ${styles.footer__padding}`}>
                            <a className={`${styles.footer__link} ${styles.footer__menu}`} href='/'>
                                Privacy Policy
                            </a>
                        </li>

                    </ul>

                </div>
            </div>
        </footer>
    )

}