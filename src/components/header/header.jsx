import React from 'react';

import '../../style.css';
import Sidenav from './sidenav';
import BrandName from './brandName';
import NormalLinksMenu from './normalLinksMenu';

export default function Header() {
    return (
        <div className="header">
            <div className="header_desktopDisplay">
                <div className="header_sideNav">
                    <Sidenav />
                </div>

                <div className="header_brandName">
                    <img src="./android-icon-48x48.png" />
                    <BrandName className="brandText" />
                </div>

                <div className="header_links">
                    <NormalLinksMenu />
                </div>
            </div>
        </div>
    );
}