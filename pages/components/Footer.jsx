import Head from 'next/head';
import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';
import { GoClock } from 'react-icons/go';
import { FcBusinessman } from 'react-icons/fc';
import { AiOutlineSetting } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <>
            <Head>
                <meta keywords={'Baş leytenant ILQAR ZEYNALOV avtomobil təmiri sexi maşın ustası masin ustasi avto temir bilgeh bilgehde masin ustasi mator xadavoy yag deyisme baki nardaran mastaga azerbaycan qadın küçəsi 167 bilgeh qadin kucesi'} />
            </Head>
            <footer id='contact'>
                <div className="right__footer">
                    <div className="icons__services"><AiOutlineSetting /></div>
                    <div className="icons__man"><FcBusinessman /></div>
                    <li className='footer__info'><a href="https://az.wikipedia.org/wiki/%C4%B0lqar_Zeynalov" target="_blank">Şəhid <br /> baş leytenant <br />ILQAR ZEYNALOV</a></li>
                    <li className="footer__services"><Link to='services' smooth={true} duration={1000}> XİDMƏTLƏR</Link>
                    </li>
                </div>
                <h1 className="footer__title">Əlaqədə olmaq</h1>
                <span className="footer__oclock"><GoClock />Bazar ertəsi - Şənbə : 09:00 - 20:00</span>
                <span>
                    <a className='footer__map'
                        target="_blank"
                        href='https://www.google.com/search?q=Bilgəh, Azerbaycan qadın küçəsi'>
                        <BiMap />
                        Bilgəh,Azerbaycan qadın küçəsi 167</a>
                </span>
                <a className='footer__tel' href="tel:+994504342602">
                    <BsFillTelephoneFill />
                    +994-(50)-434-26-02</a>
                <a className='footer__tel1' href="tel:+994504342602">
                    <BsFillTelephoneFill />
                    +994-(99)-363-31-11</a>
                <p className="footer__p">Maşın təmiri © 2022. Biləh, Azerbaycan</p>
            </footer>
        </>
    );
};

export default Footer;