import styles from './header.module.less';
import { ReactComponent as LogoHeader } from './../../assets/icons/logo.svg';

export default function Header() {
    return (

        <header className={`${styles.header} container`}>

            <ul className={styles.header__list}>

                <li className={styles.header__item}>
                    <a href="/" className={styles.header__wrapper}>
                        <LogoHeader className={styles.header__svg}/>
                        <p className={styles.header__text}>fashion</p>
                    </a>
                </li>
            </ul>

            <nav className={styles.nav__list}>
                <ul className={styles.nav__list}>

                    <li className={styles.nav__item}>
                        <a className={styles.nav__link} href='/'>
                            catalogue
                        </a>
                    </li>

                    <li className={styles.nav__item}>
                        <a className={styles.nav__link} href='/'>
                            fashion
                        </a>
                    </li>

                    <li className={styles.nav__item}>
                        <a className={styles.nav__link} href='/'>
                            favourite
                        </a>
                    </li>

                    <li className={styles.nav__item}>
                        <a className={styles.nav__link} href='/'>
                            lifestyle
                        </a>
                    </li>

                    <li className={styles.nav__item}>
                        <button className={`${styles.general__modal} modal`}type='button'>
                            <span className='modal__sign'>sign up</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
