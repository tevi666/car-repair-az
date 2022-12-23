import React from 'react';
import { Link } from 'react-scroll';

const Gamburger = ({ items, active, setActive }) => {
    return (
        <>
            <div className={active ? 'menu active' : 'menu'}
                onClick={() => setActive(false)}>
                <div className="menu__content" onClick={e => e.stopPropagation()}>
                    <ul>
                        {items.map((item, i) =>
                            <li key={i} className="gamburger__li">
                                <Link smooth={true} duration={1000} onClick={() => setActive(false)} to={item.to}>{item.value}</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Gamburger;