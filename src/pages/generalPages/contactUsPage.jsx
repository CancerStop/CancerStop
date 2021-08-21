import React from 'react';
import Iframe from 'react-iframe';
import '../../style.css';

export default function ContactUsPage() {
    return (
        <Iframe
            url="https://docs.google.com/forms/d/e/1FAIpQLSdo_Jg0tnQhWFjiMGHWVXOqzeoKwHayl7_a6Ayn6nTDGzP0Ug/viewform?embedded=true"
            width="450px"
            height="450px"
            id="myId"
            className="donateIFrame"
            display="initial"
            position="relative"
        />
    );
}