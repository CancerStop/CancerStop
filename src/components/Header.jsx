import logo from '../images/logo.png';
import '../styles/componentStyles/HeaderStyles.css';

import { Link } from "react-router-dom";
import Sidenav from './Sidenav';

export default function Header() {
    return (
        <div className='header'>
            <Sidenav />

            <div className='header_title'>
                <Link className='header_title' to='/'>
                    <img alt='logo' className='header_title-logo' src={logo} />
                    <h1 className='header_title-brandName'>CancerStop</h1>
                </Link>
            </div>

            <div></div>
        </div>
    )
}