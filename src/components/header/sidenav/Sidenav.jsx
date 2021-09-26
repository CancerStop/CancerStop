import React, { useState } from 'react';
import './SidenavStyles.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { SidenavData } from './SidenavData';

export default function Sidenav() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className="header-side_nav">
            <IconContext.Provider value={{ color: 'black' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>

                        {SidenavData.map((item, index) => {
                            if (item.isInternal) {
                                return (
                                    <li key={index} className='nav-text'>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            } else {
                                return (
                                    <li key={index} className='nav-text'>
                                        <a target="_blank" href={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </a>
                                    </li>
                                )
                            }
                        })}

                        {/* {BurgernavInternalLinks.map((item, index) => (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                            )
                            )}

                            {BurgerNavExternalLinks.map((item, index) => (
                            <li key={index} className={item.cName}>
                                <a href={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </a>
                            </li>
                            )
                        )} */}
                    </ul>
                </nav>
            </IconContext.Provider>
        </div>
    )
}