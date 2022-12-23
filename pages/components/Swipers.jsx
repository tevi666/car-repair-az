import Head from 'next/head';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


const Swipers = () => {
    return (
        <>
            <Head>
                <meta keywords={'Baş leytenant ILQAR ZEYNALOV avtomobil təmiri sexi maşın ustası +994504342602 masin ustasi avto temir bilgeh bilgehde masin ustasi mator xadavoy yag deyisme baki nardaran mastaga azerbaycan qadın küçəsi 167 bilgeh qadin kucesi'} />
            </Head>
            <section>
                <Swiper
                    slidesPerView={1}
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    autoplay={true}
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={swiper => console.log(swiper)}
                >
                    <SwiperSlide><img className='slider' src={'https://images.pexels.com/photos/8986037/pexels-photo-8986037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} /></SwiperSlide>
                    <SwiperSlide><img className='slider' src={'https://images.pexels.com/photos/8986041/pexels-photo-8986041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} /></SwiperSlide>
                    <SwiperSlide><img className='slider' src={'https://images.pexels.com/photos/6870320/pexels-photo-6870320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} /></SwiperSlide>
                </Swiper>
            </section>
        </>
    );
};

export default Swipers;