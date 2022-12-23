import Head from 'next/head';
import React from 'react';

const Map = () => {
    return (
        <>
            <Head>
                <meta keywords={'Baş leytenant ILQAR ZEYNALOV avtomobil təmiri sexi maşın ustası masin ustasi avto temir bilgeh bilgehde masin ustasi mator xadavoy yag deyisme baki nardaran mastaga azerbaycan qadın küçəsi 167 bilgeh qadin kucesi'} />
            </Head>
            <section id='map'>
                <h1 className="map__title">Xəritədə</h1>
                <p className="map__descr">Bizi asanlıqla tapa bilərsiniz</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1051.68476849178!2d50.03887748892134!3d40.563970949651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1664040570664!5m2!1sru!2s" width="100%" height="400" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </>
    );
};

export default Map;