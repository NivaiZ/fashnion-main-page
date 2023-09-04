import styles from './promo.module.less';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ReactComponent as DecorYellow } from '../../../public/assets/icons/decor-yellow.svg';

export default function Promo() {
    return (
        <section className={`${styles.promo__slider} container`}>
            <Swiper
                spaceBetween={120}
                slidesPerView={1}
                className={styles.promo__slider}
                wrapperTag="ul"
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    nextEl: `.${styles.promo__next}`,
                    prevEl: `.${styles.promo__prev}`,
                }}
                modules={[Keyboard, Pagination, Navigation]}
            >
                <SwiperSlide tag='li'>


                    <ul className={`${styles.promo__list} ${styles.promo__more}`}>
                        <li className={styles.promo__item}>
                            <ul className={`${styles.promo__group} ${styles.promo__box}`}>

                                <li className={`${styles.promo__item} ${styles.promo__margin}`}>
                                    <p className={`${styles.promo__text} ${styles.promo__white}`}>LET’S</p>
                                </li>

                                <li className={styles.promo__item}>
                                    <p className={styles.promo__text}>EXPLORE</p>
                                </li>

                                <li className={styles.promo__item}>
                                    <p className={`${styles.promo__text} ${styles.promo__gold}`}>UNIQUE</p>
                                </li>

                                <li className={styles.promo__item}>
                                    <p className={styles.promo__text}>CLOTHES.</p>
                                </li>

                            </ul>

                            <ul className={`${styles.promo__inner} ${styles.promo__bottom}`}>
                                <li className={styles.promo__item}>
                                    <p className={styles.promo__description}>Live for Influential and Innovative fashion!</p>
                                </li>
                            </ul>

                            <ul className={`${styles.promo__list} ${styles.promo__flex}`}>
                                <li className={styles.promo__item}>
                                    <DecorYellow />
                                </li>

                                <li className={styles.promo__item}>
                                    <a className={`${styles.promo__modal} modal`} href='/'>
                                        <span className='modal__sign'>Shop Now</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className={styles.promo__item}>
                            <img src='assets/images/header-img.jpg' className={styles.promo__image} />
                        </li>
                    </ul>
                </SwiperSlide>

                <SwiperSlide tag='li'>


                    <ul className={`${styles.promo__list} ${styles.promo__more}`}>
                        <li className={styles.promo__item}>
                            <ul className={styles.promo__group}>

                                <li className={styles.promo__item}>
                                    <p className={`${styles.promo__text} ${styles.promo__white}`}>LET’S</p>
                                </li>

                                <li className={styles.promo__item}>
                                    <p className={styles.promo__text}>DISCOVER</p>
                                </li>

                                <li className={styles.promo__item}>
                                    <p className={`${styles.promo__text} ${styles.promo__gold}`}>EXQUISITE</p>
                                </li>

                                <li className={styles.promo__item}>
                                    <p className={styles.promo__text}>STYLES.</p>
                                </li>

                            </ul>

                            <ul className={`${styles.promo__inner} ${styles.promo__bottom}`}>
                                <li className={styles.promo__item}>
                                    <p className={styles.promo__description}>Live for Influential and Innovative fashion!</p>
                                </li>
                            </ul>

                            <ul className={`${styles.promo__list} ${styles.promo__flex}`}>
                                <li className={styles.promo__item}>
                                    <DecorYellow />
                                </li>

                                <li className={styles.promo__item}>
                                    <a className='modal' href='/'>
                                        <span className='modal__sign'>Shop Now</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className={styles.promo__item}>
                            <img src='assets/images/header-img.jpg' className={styles.promo__image} />
                        </li>
                    </ul>
                </SwiperSlide>
            </Swiper>
            <ul className={styles.promo__holder}>

                <li className={`${styles.promo__wrap} ${styles.promo__left}`}>
                    <button className={styles.promo__prev} type='button' aria-label='slider-prev'></button>
                </li>

                <li className={`${styles.promo__wrap} ${styles.promo__right}`}>
                    <button className={styles.promo__next} type='button' aria-label='slider-next'></button>
                </li>
            </ul>
        </section>
    );
}
