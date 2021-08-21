import React from 'react';
import Iframe from 'react-iframe';

import '../../style.css';

export default function DonatePage() {
    return (
        <div>
            <Iframe url="https://www.nfggive.com/guidestar/83-2805054"
                width="450px"
                height="450px"
                id="myId"
                className="donateIFrame"
                display="initial"
                position="relative"
            />
        </div>
    );
}