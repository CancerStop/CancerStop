import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../style.css";

export default function ListOfCancerWithLinks() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
            }}
        >
            <Link
                className="selectCancerMenu_cancerItem"
                to="/acuteMyeloidLeukemia"
            >
                Acute Myeloid Leukemia
            </Link>
            <Link
                className="selectCancerMenu_cancerItem"
                to="/chronicMyeloidLeukemia"
            >
                Chronic Myeloid Leukemia
            </Link>
            <Link
                className="selectCancerMenu_cancerItem"
                to="/acuteMonocyticLeukemia"
            >
                Acute Monocytic Leukemia
            </Link>
            <Link
                className="selectCancerMenu_cancerItem"
                to="/acuteLyphocyticLeukemia"
            >
                Acute Lymphocytic Leukemia
            </Link>
            <Link
                className="selectCancerMenu_cancerItem"
                to="/chronicLymphocyticLeukemia"
            >
                Chronic Lymphocytic Leukemia
            </Link>
            <Link
                className="selectCancerMenu_cancerItem"
                to="/liverLymphaticBileDuct"
            >
                Liver Lymphatic Bile and Duct
            </Link>
            <Link className="selectCancerMenu_cancerItem" to="/pancreas">
                Pancreas
            </Link>
            <Link className="selectCancerMenu_cancerItem" to="/lung">
                Lung
            </Link>
        </div>
    );
}