import styles from './brands.module.less';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Brands() {
    return (
        <section className={styles.brands}>
            <div className={`${styles.brands__wrapper} container__brands`}>
                <Swiper
                    spaceBetween={120}
                    slidesPerView={6}
                    height={110}
                    className='brands__slider'
                    wrapperTag="ul"
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: `.${styles.brands__next}`,
                        prevEl: `.${styles.brands__prev}`,
                    }}
                    modules={[Keyboard, Pagination, Navigation]}
                >
                    <SwiperSlide tag="li">
                        <a className={styles.brands__link} href='/'>
                            <img src='assets/brands/HM.png' className={styles.brands__image} />
                        </a>
                    </SwiperSlide>

                    <SwiperSlide tag="li">
                        <a className={styles.brands__link} href='/'>
                            <img src='assets/brands/Obey.png' className={styles.brands__image} />
                        </a>
                    </SwiperSlide>

                    <SwiperSlide tag="li">
                        <a className={styles.brands__link} href='/'>
                            <img src='assets/brands/Shopify.png' className={styles.brands__image} />
                        </a>
                    </SwiperSlide>

                    <SwiperSlide tag="li">
                        <a className={styles.brands__link} href='/'>
                            <img src='assets/brands/Lacoste.png' className={styles.brands__image} />
                        </a>
                    </SwiperSlide>

                    <SwiperSlide tag="li">
                        <a className={styles.brands__link} href='/'>
                            <img src='assets/brands/Levis.png' className={styles.brands__image} />
                        </a>
                    </SwiperSlide>

                    <SwiperSlide tag="li">
                        <a className={styles.brands__link} href='/'>
                            <img src='assets/brands/Amazon.png' className={styles.brands__image} />
                        </a>
                    </SwiperSlide>

                    <SwiperSlide tag="li">
                        <a className={styles.brands__link} href='/'>
                            <img src='assets/brands/Reebok.png' className={styles.brands__image} />
                        </a>
                    </SwiperSlide>

                    <SwiperSlide tag="li">
                        <a className={styles.brands__link} href='/'>
                            <img src='assets/brands/Puma.png' className={styles.brands__image} />
                        </a>
                    </SwiperSlide>
                </Swiper>
                <ul className={styles.brands__holder}>

                    <li className={`${styles.brands__wrap} ${styles.brands__left}`}>
                        <button className={styles.brands__prev} type='button' aria-label='slider-prev'></button>
                    </li>

                    <li className={`${styles.brands__wrap} ${styles.brands__right}`}>
                        <button className={styles.brands__next} type='button' aria-label='slider-next'></button>
                    </li>
                </ul>

            </div>
        </section >
    )
}