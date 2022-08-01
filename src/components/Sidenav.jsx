import { useState } from 'react';
import '../styles/componentStyles/SidenavStyles.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { SidenavData } from '../data/SidenavData';

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
                                        <a rel="noreferrer" target="_blank" href={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </a>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </nav>
                <div onClick={() => setSidebar(false)} className={sidebar ? 'nav-overlay active' : 'nav-overlay'}></div>
            </IconContext.Provider>
        </div>
    )
}
