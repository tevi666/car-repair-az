import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Head from 'next/head';
import ServicesCard from './ServicesCard';
const Services = () => {
    return (
        <>
            <Head>
                <meta keywords={'Baş leytenant ILQAR ZEYNALOV avtomobil təmiri sexi maşın ustası +994504342602 masin ustasi avto temir bilgeh bilgehde masin ustasi mator xadavoy yag deyisme baki nardaran mastaga azerbaycan qadın küçəsi 167 bilgeh qadin kucesi'} />
            </Head>
            <section className="services" id='services'>
                <h1 className="services-header">XİDMƏTLƏR</h1>
                <Swiper
                    slidesPerView={3}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    duration={100}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={swiper => console.log(swiper)}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        950: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1400: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        }
                    }}
                >
                    <SwiperSlide>
                        <ServicesCard img='https://images.pexels.com/photos/7564861/pexels-photo-7564861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' title='Mühərrik təmiri'
                            descr='Hər hansı bir motor problemi' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesCard img='https://images.pexels.com/photos/8985459/pexels-photo-8985459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' title='Yağ dəyişdirilməsi'
                            descr='Tez və səmərəli' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesCard img='https://images.pexels.com/photos/4489729/pexels-photo-4489729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' title='Xadovoyun remontu'
                            descr='Xadavoyun hər probleminə baxılır' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesCard img='https://images.pexels.com/photos/3855341/pexels-photo-3855341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' title='Çilingər xidmətləri'
                            descr='Bütün çilingər işləri' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesCard img='https://images.pexels.com/photos/57007/pexels-photo-57007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' title='Elektrik xidmətləri' descr='Bütün elektrik işləri' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesCard img='https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' title='Avtomobil diaqnostikası' descr='Bütün diaqnostika işləri' />
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    );
};

export default Services;