import '../../style.css';
import logo from '../../images/logo.png';

import { Link } from "react-router-dom";
import Sidenav from './sidenav/Sidenav';

export default function Header() {
    return (
        <div className='header'>
            <Sidenav />

            <div className='header_title'>
                <Link className='header_title' to='/'>
                    <img className='header_title-logo' src={logo} />
                    <h1 className='header_title-brandName'>CancerStop</h1>
                </Link>
            </div>

            <div></div>
        </div>
    )
}
