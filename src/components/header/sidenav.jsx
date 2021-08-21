import React, { useState } from 'react';
import SideNav, { MenuIcon } from "react-simple-sidenav";
import { Link } from "react-router-dom";

export default function Sidenav() {
    const [showNav, setShowNav] = useState();
    const importantLinksArr = [
        <a
            className="header_importantLink"
            target="_blank"
            href="https://cse.google.com/cse?cx=004715292727045167679:c87ei5ji6we"
        >
            Search
        </a>,
        <a
            className="header_importantLink"
            target="_blank"
            href="https://www.cancer.gov/about-cancer/treatment/drugs/cancer-type"
        >
            Approved Drugs
        </a>,
        <a
            className="header_importantLink"
            target="_blank"
            href="https://www.clinicaltrials.gov/ct2/home\"
        >
            Clinical Trials
        </a>,
        <Link
            className="header_importantLink"
            to="/genesAndMoreForm"
        >
            Genes & More
        </Link>,
        <a
            className="header_importantLink"
            target="_blank"
            href="https://seer.cancer.gov/explorer/application.html?site=1&data_type=4&graph_type=6&compareBy=age_range&chk_age_range_16=16&chk_age_range_62=62&chk_age_range_122=122&chk_age_range_160=160&chk_age_range_166=166&sex=1&race=1&hdn_stage=101&advopt_precision=1&advopt_show_ci=on&advopt_display=2"
        >
            Survival Curves
        </a>,
        <Link
            className="header_importantLink"
            to="/contact"
        >
            Contact us
        </Link>,
        <Link className="header_importantLink" to="/donate" >
            Donate
        </Link >,
        <Link className="header_importantLink" to="/faq">
            FAQ
        </Link>
    ];

    const title = <h1>General Links</h1>;

    return (
        <div>
            <MenuIcon onClick={() => setShowNav(true)} />
            <SideNav
                titleStyle={{ backgroundColor: "#001c57", padding: 20 }}
                showNav={showNav}
                onHideNav={() => setShowNav(false)}
                title={title}
                items={importantLinksArr}
            />
        </div>
    );
}