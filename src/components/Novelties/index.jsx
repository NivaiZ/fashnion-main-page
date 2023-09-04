import styles from './novelties.module.less';
import { ReactComponent as ArrowCard } from '../../../public/assets/icons/arrow.svg';
// icons/arrow.svg
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Novelties() {
    return (
        <section className={`${styles.novelties} container`}>
            <h2 className={styles.novelties__heading}>NEW ARRIVALS</h2>
            <Swiper
                spaceBetween={120}
                slidesPerView={3}
                height={110}
                className={styles.novelties__slider}
                wrapperTag="ul"
                navigation={{
                    nextEl: `.${styles.novelties__next}`,
                    prevEl: `.${styles.novelties__prev}`,
                }}
                modules={[Keyboard, Pagination, Navigation]}
            >

                <SwiperSlide tag="li">
                    <a className={styles.novelties__link} href='/'>
                        <img className={styles.novelties__image} src="public/assets/categories/cat-01.jpg" />

                        <ul className={styles.novelties__group}>
                            <li className={styles.novelties__flex}>
                                <h3 className={styles.novelties__head}>Hoodies & Sweetshirt</h3>
                                <ArrowCard className={styles.novelties__svg} />
                            </li>

                            <li className={styles.novelties__point}>
                                <p className={styles.novelties__incentive}>Explore Now!</p>
                            </li>
                        </ul>

                    </a>
                </SwiperSlide>

                <SwiperSlide tag="li">
                    <a className={styles.novelties__link} href='/'>
                        <img className={styles.novelties__image} src="public/assets/categories/cat-02.jpg" />

                        <ul className={styles.novelties__group}>
                            <li className={styles.novelties__flex}>
                                <h3 className={styles.novelties__head}>Coats & Parkas</h3>
                                <ArrowCard className={styles.novelties__svg} />
                            </li>

                            <li className={styles.novelties__point}>
                                <p className={styles.novelties__incentive}>Explore Now!</p>
                            </li>
                        </ul>

                    </a>
                </SwiperSlide>

                <SwiperSlide tag="li">
                    <a className={styles.novelties__link} href='/'>
                        <img className={styles.novelties__image} src="public/assets/categories/cat-03.jpg" />

                        <ul className={styles.novelties__group}>
                            <li className={styles.novelties__flex}>
                                <h3 className={styles.novelties__head}>Tees & T-Shirt</h3>
                                <ArrowCard className={styles.novelties__svg} />
                            </li>

                            <li className={styles.novelties__point}>
                                <p className={styles.novelties__incentive}>Explore Now!</p>
                            </li>
                        </ul>

                    </a>
                </SwiperSlide>

                <SwiperSlide tag="li">
                    <a className={styles.novelties__link} href='/'>
                        <img className={styles.novelties__image} src="/public/assets/categories/cat-04.avif" />

                        <ul className={styles.novelties__group}>
                            <li className={styles.novelties__flex}>
                                <h3 className={styles.novelties__head}>Tees & T-Shirt</h3>
                                <ArrowCard className={styles.novelties__svg} />
                            </li>

                            <li className={styles.novelties__point}>
                                <p className={styles.novelties__incentive}>Explore Now!</p>
                            </li>
                        </ul>

                    </a>
                </SwiperSlide>

                <SwiperSlide tag="li">
                    <a className={styles.novelties__link} href='/'>
                        <img className={styles.novelties__image} src="/public/assets/categories/cat-05.avif" />

                        <ul className={styles.novelties__group}>
                            <li className={styles.novelties__flex}>
                                <h3 className={styles.novelties__head}>Tees & T-Shirt</h3>
                                <ArrowCard className={styles.novelties__svg} />
                            </li>

                            <li className={styles.novelties__point}>
                                <p className={styles.novelties__incentive}>Explore Now!</p>
                            </li>
                        </ul>

                    </a>
                </SwiperSlide>

                <SwiperSlide tag="li">
                    <a className={styles.novelties__link} href='/'>
                        <img className={styles.novelties__image} src="public/assets/categories/cat-06.avif" />

                        <ul className={styles.novelties__group}>
                            <li className={styles.novelties__flex}>
                                <h3 className={styles.novelties__head}>Tees & T-Shirt</h3>
                                <ArrowCard className={styles.novelties__svg} />
                            </li>

                            <li className={styles.novelties__point}>
                                <p className={styles.novelties__incentive}>Explore Now!</p>
                            </li>
                        </ul>

                    </a>
                </SwiperSlide>
            </Swiper>
            <ul className={styles.novelties__holder}>

                    <li className={`${styles.novelties__wrap} ${styles.novelties__left}`}>
                        <button className={styles.novelties__prev} type='button' aria-label='slider-prev'></button>
                    </li>

                    <li className={`${styles.novelties__wrap} ${styles.novelties__right}`}>
                        <button className={styles.novelties__next} type='button' aria-label='slider-next'></button>
                    </li>
                </ul>
        </section>
    )
}