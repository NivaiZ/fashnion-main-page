import styles from './favorites.module.less';
import { ReactComponent as ArrowCard } from '../../../public/assets/icons/arrow.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Favorite() {
    return (
        <section className={`${styles.favorites} container`}>
            <h2 className={styles.favorites__heading}>Young’s Favourite</h2>
            <Swiper
                spaceBetween={48}
                slidesPerView={2}
                className={styles.favorites__slider}
                wrapperTag="ul"
                navigation={{
                    nextEl: `.${styles.favorites__next}`,
                    prevEl: `.${styles.favorites__prev}`,
                }}
                modules={[Keyboard, Pagination, Navigation]}
            >

                <SwiperSlide tag="li">
                    <a className={styles.favorites__link} href='/'>
                        <div className={styles.favorites__box}>
                            <img className={styles.favorites__image} src="assets/images/promo-01.jpg" />
                        </div>

                        <ul className={styles.favorites__group}>
                            <li className={styles.favorites__flex}>
                                <h3 className={styles.favorites__head}>Hoodies & Sweetshirt</h3>
                                <ArrowCard className={styles.favorites__svg} />
                            </li>

                            <li className={styles.favorites__point}>
                                <p className={styles.favorites__incentive}>Explore Now!</p>
                            </li>
                        </ul>

                    </a>
                </SwiperSlide>

                <SwiperSlide tag="li">
                    <a className={styles.favorites__link} href='/'>
                        <div className={styles.favorites__box}>
                            <img className={styles.favorites__image} src="assets/images/promo-02.jpg" />
                        </div>
                        <ul className={styles.favorites__group}>
                            <li className={styles.favorites__flex}>
                                <h3 className={styles.favorites__head}>Coats & Parkas</h3>
                                <ArrowCard className={styles.favorites__svg} />
                            </li>

                            <li className={styles.favorites__point}>
                                <p className={styles.favorites__incentive}>Explore Now!</p>
                            </li>
                        </ul>

                    </a>
                </SwiperSlide>

                <SwiperSlide tag="li">
                    <a className={styles.favorites__link} href='/'>
                        <div className={styles.favorites__box}>
                            <img className={styles.favorites__image} src="assets/images/promo-03.jpg" />
                        </div>
                        <ul className={styles.favorites__group}>
                            <li className={styles.favorites__flex}>
                                <h3 className={styles.favorites__head}>Tees & T-Shirt</h3>
                                <ArrowCard className={styles.favorites__svg} />
                            </li>

                            <li className={styles.favorites__point}>
                                <p className={styles.favorites__incentive}>Explore Now!</p>
                            </li>
                        </ul>

                    </a>
                </SwiperSlide>

                <SwiperSlide tag="li">
                    <a className={styles.favorites__link} href='/'>
                        <div className={styles.favorites__box}>
                            <img className={styles.favorites__image} src="assets/images/promo-04.jpg" />
                        </div>
                        <ul className={styles.favorites__group}>
                            <li className={styles.favorites__flex}>
                                <h3 className={styles.favorites__head}>Tees & T-Shirt</h3>
                                <ArrowCard className={styles.favorites__svg} />
                            </li>

                            <li className={styles.favorites__point}>
                                <p className={styles.favorites__incentive}>Explore Now!</p>
                            </li>
                        </ul>

                    </a>
                </SwiperSlide>

                <SwiperSlide tag="li">
                    <a className={styles.favorites__link} href='/'>
                        <div className={styles.favorites__box}>
                            <img className={styles.favorites__image} src="assets/images/promo-05.jpg" />
                        </div>
                        <ul className={styles.favorites__group}>
                            <li className={styles.favorites__flex}>
                                <h3 className={styles.favorites__head}>Tees & T-Shirt</h3>
                                <ArrowCard className={styles.favorites__svg} />
                            </li>

                            <li className={styles.favorites__point}>
                                <p className={styles.favorites__incentive}>Explore Now!</p>
                            </li>
                        </ul>

                    </a>
                </SwiperSlide>

                <SwiperSlide tag="li">
                    <a className={styles.favorites__link} href='/'>
                        <div className={styles.favorites__box}>
                            <img className={styles.favorites__image} src="assets/images/promo-06.jpg" />
                        </div>
                        <ul className={styles.favorites__group}>
                            <li className={styles.favorites__flex}>
                                <h3 className={styles.favorites__head}>Tees & T-Shirt</h3>
                                <ArrowCard className={styles.favorites__svg} />
                            </li>

                            <li className={styles.favorites__point}>
                                <p className={styles.favorites__incentive}>Explore Now!</p>
                            </li>
                        </ul>

                    </a>
                </SwiperSlide>
            </Swiper>
            <ul className={styles.favorites__holder}>

                <li className={`${styles.favorites__wrap} ${styles.favorites__left}`}>
                    <button className={styles.favorites__prev} type='button' aria-label='slider-prev'></button>
                </li>

                <li className={`${styles.favorites__wrap} ${styles.favorites__right}`}>
                    <button className={styles.favorites__next} type='button' aria-label='slider-next'></button>
                </li>
            </ul>
        </section>
    )
}