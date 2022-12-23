import Head from 'next/head';
import React, { useState } from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';
import { Link } from 'react-scroll';
import Gamburger from './Gamburger';
import { FaHamburger } from 'react-icons/fa';

const Navbar = () => {
    const items = [
        { value: 'KONTAKTLAR', to: 'contact' },
        { value: 'XİDMƏTLƏR', to: 'services' },
        { value: 'XƏRİTƏ', to: 'map' }
    ];
    const [menuActive, setMenuActive] = useState(false);
    return (
        <>
            <Head>
                <meta keywords={'Baş leytenant ILQAR ZEYNALOV avtomobil təmiri sexi maşın ustası masin ustasi avto temir bilgeh bilgehde masin ustasi mator xadavoy yag deyisme baki nardaran mastaga azerbaycan qadın küçəsi 167 bilgeh qadin kucesi'} />
            </Head>
            <nav className="shadow-sm navbar flex items-center justify-around h-[100px] bg-red-600">
                <div className="logo text-white"><div className="nav__text">Baş leytenant <br /> ILQAR ZEYNALOV<span>–un adına <br /> avtomobil təmiri sexi</span></div>
                </div>
                <div className="hamburger" onClick={() => { setMenuActive(!menuActive) }}><FaHamburger /></div>
                <div className="gamburger__menu"><Gamburger items={items} active={menuActive} setActive={setMenuActive} /></div>
                <div className="nav__item">
                    <ul className="text-white flex mx-auto">
                        <li className="nav-item nav"><Link to='contact' smooth={true} duration={1000}> KONTAKTLAR</Link></li>
                        <li className="nav-item nav"><Link to='services' smooth={true} duration={1000}>XİDMƏTLƏR</Link></li>
                        <li className="nav"><Link to='map' smooth={true} duration={1000}>XƏRİTƏ</Link></li>
                    </ul>
                </div>
                <div className="contact">
                    <ul className="text-white">
                        <li>
                            <a className="tel" href="tel:+994504342602">
                                <BsFillTelephoneFill />
                                +994-(50)-434-26-02</a>
                        </li>
                        <li>
                            <a className="tel" href="tel:+994504342602">
                                <BsFillTelephoneFill />
                                +994-(99)-363-31-11</a>
                        </li>
                        <li>
                            <a className="tel map" target="_blank" href='https://www.google.com/search?q=Bilgəh, Azerbaycan qadın küçəsi'>
                                <BiMap />Bilgəh,Azerbaycan qadın küçəsi 167</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;