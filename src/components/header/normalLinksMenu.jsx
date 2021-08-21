import React from 'react';
import { Link } from "react-router-dom";

import '../../style.css';

export default function normalLinksMenu() {
    return (
        <ul>
            <Link className="header_desktopDisplayLink" to="/contact" >
                <li className="header_quickLink">Contact us</li>
            </Link>

            <Link className="header_desktopDisplayLink" to="/donate" >
                <li className="header_quickLink">Donate</li>
            </Link>

            <Link className="header_desktopDisplayLink" to="/faq">
                <li className="header_quickLink">FAQ</li>
            </Link>
        </ul>
    );
}