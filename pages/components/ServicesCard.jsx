import Head from 'next/head';
import React, { useState } from 'react';
const ServicesCard = (props) => {
    const [details, setDetails] = useState(false);
    const btnClassName = details ? 'card__button__hidden hover:bg-green-500' : 'card__button';
    const btnClasses = ['', btnClassName];

    return (
        <>
            <Head>
                <meta keywords={'Baş leytenant ILQAR ZEYNALOV avtomobil təmiri sexi maşın ustası +994504342602 masin ustasi avto temir bilgeh bilgehde masin ustasi mator xadavoy yag deyisme baki nardaran mastaga azerbaycan qadın küçəsi 167 bilgeh qadin kucesi'} />
            </Head>
            <section className="cards">
                <div className="card">
                    <div className="card__img">
                        <img className="card__img" src={props.img} alt='masin temiri' />
                    </div>
                    <div className="card__text">
                        <h3 className="card__title">{props.title}</h3>
                        {
                            details && <p className="card__descr">{props.descr}</p>
                        }
                    </div>
                    <div className="card__btn">
                        <button
                            onClick={() => setDetails(prev => !prev)}
                            className={btnClasses.join(' ')}>{details ? 'Gizlət' : 'Ətraflı'}</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesCard;