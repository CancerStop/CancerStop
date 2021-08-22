import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./style.css";

import Header from "./components/header/header.jsx";
import Footer from "./components/footer.jsx";

import HomePage from "./pages/generalPages/homePage.jsx";
import FaqPage from "./pages/generalPages/faqPage";
import DonatePage from "./pages/generalPages/donate";
import ContactUsPage from "./pages/generalPages/contactUsPage";
import GenesAndMoreForm from "./pages/generalPages/genesAndMoreForm";

import AcuteLymphocyticLeukemia from "./pages/cancerPages/acuteLymphocyticLeukemia";
import AcuteMonocyticLeukemia from "./pages/cancerPages/acuteMonocyticLeukemia";
import AcuteMyeloidLeukemia from "./pages/cancerPages/acuteMyeloidLeukemia";
import ChronicLymphocyticLeukemia from "./pages/cancerPages/chronicLymphocyticLeukemia";
import ChronicMyeloidLeukemia from "./pages/cancerPages/chronicMyeoidLeukemia";
import LiverLymphaticBileandDuct from "./pages/cancerPages/liverLymphaticBileandDuct";
import Lung from "./pages/cancerPages/lung";
import Pancreas from "./pages/cancerPages/pancreas";

export default function App() {
    return (
        <div className="app">
            <Router>
                <Header />

                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/faq" component={FaqPage} />
                    <Route
                        path="/acuteLyphocyticLeukemia"
                        component={AcuteLymphocyticLeukemia}
                    />
                    <Route
                        path="/acuteMonocyticLeukemia"
                        component={AcuteMonocyticLeukemia}
                    />
                    <Route
                        path="/chronicLymphocyticLeukemia"
                        component={ChronicLymphocyticLeukemia}
                    />
                    <Route
                        path="/acuteMyeloidLeukemia"
                        component={AcuteMyeloidLeukemia}
                    />
                    <Route
                        path="/chronicMyeloidLeukemia"
                        component={ChronicMyeloidLeukemia}
                    />
                    <Route
                        path="/liverLymphaticBileDuct"
                        component={LiverLymphaticBileandDuct}
                    />
                    <Route
                        path="/lung"
                        component={Lung}
                    />
                    <Route
                        path="/pancreas"
                        component={Pancreas}
                    />
                    <Route
                        path="/donate"
                        component={DonatePage}
                    />
                    <Route
                        path="/contact"
                        component={ContactUsPage}
                    />
                    <Route
                        path="/genesAndMoreForm"
                        component={GenesAndMoreForm}
                    />
                </Switch>
            </Router>

            <Router>
                <Footer />
            </Router>
        </div>
    );
}
