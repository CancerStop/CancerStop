import React from 'react';
import { Link } from "react-router-dom";

import '../../style.css';

export default function BrandName() {
    return (
        <div>
            <Link className="brandNameText" to="/">
                <div className="brandNameText">
                    CancerStop
                </div>
            </Link>
        </div>
    );
}