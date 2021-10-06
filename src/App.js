import './style.css';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Header from './components/header/Header.jsx';
import Footer from './components/Footer.jsx';

import HomePage from './pages/generalPages/HomePage.jsx';
import FaqPage from './pages/generalPages/FaqPage.jsx';
import ContactUsPage from './pages/generalPages/ContactUsPage';
import DonatePage from './pages/generalPages/DonatePage';
import GenesAndMore from './pages/generalPages/GenesAndMore.jsx';

import AcuteLymphocyticLeukemia from './pages/cancerPages/leukemia/AcuteLymphocyticLeukemia.jsx';
import AcuteMonocyticLeukemia from './pages/cancerPages/leukemia/AcuteMonocyticLeukemia.jsx';
import AcuteMyeloidLeukemia from './pages/cancerPages/leukemia/AcuteMyeloidLeukemia.jsx';
import ChronicLymphocyticLeukemia from './pages/cancerPages/leukemia/ChronicLymphocyticLeukemia.jsx';
import ChronicMyeloidLeukemia from './pages/cancerPages/leukemia/ChronicMyeloidLeukemia.jsx';

import BreastCancerAndLuminalA from './pages/cancerPages/breast/BreastCancerAndLuminalA';
import BreastCancerAndTripleNegativeOrLuminalA from './pages/cancerPages/breast/BreastCancerAndTripleNegativeOrLuminalA';
import BreastCancerAndLuminalB from './pages/cancerPages/breast/BreastCancerAndLuminalB.jsx';
import BreastCancerAndHER2Enriched from './pages/cancerPages/breast/BreastCancerAndHER2Enriched';

import Lungs from './pages/cancerPages/lungAndBronchus/Lungs.jsx';

import Pancreas from './pages/cancerPages/Pancreas.jsx';

import LiverLymphaticBileAndDuct from './pages/cancerPages/LiverLymphaticBileAndDuct.jsx';

import Glioblastoma from './pages/cancerPages/Glioblastoma.jsx';

export default function App() {
    return (
        <div className='app'>
            <Router>
                <Header />

                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/faq' component={FaqPage} />
                    <Route path='/contact-us' component={ContactUsPage} />
                    <Route path='/donate' component={DonatePage} />
                    <Route path='/acute-lymphocytic-leukemia' component={AcuteLymphocyticLeukemia} />
                    <Route path='/acute-monocytic-leukemia' component={AcuteMonocyticLeukemia} />
                    <Route path='/acute-myeloid-leukemia' component={AcuteMyeloidLeukemia} />
                    <Route path='/chronic-lymphocytic-leukemia' component={ChronicLymphocyticLeukemia} />
                    <Route path='/liver-lymphatic-bile-and-duct' component={LiverLymphaticBileAndDuct} />
                    <Route path='/lungs' component={Lungs} />
                    <Route path='/pancreas' component={Pancreas} />
                    <Route path='/chronic-myeloid-leukemia' component={ChronicMyeloidLeukemia} />
                    <Route path='/genes-and-more' component={GenesAndMore} />
                    <Route path='/glioblastoma' component={Glioblastoma} />
                    <Route path='/breast-cancer-and-luminal-a' component={BreastCancerAndLuminalA} />
                    <Route path='/breast-cancer-and-triple-negative-or-luminal-a' component={BreastCancerAndTripleNegativeOrLuminalA} />
                    <Route path='/breast-cancer-and-luminal-b' component={BreastCancerAndLuminalB} />
                    <Route path='/breast-cancer-and-HER2-enriched' component={BreastCancerAndHER2Enriched} />
                </Switch>
            </Router>

            <Router>
                <Footer />
            </Router>
        </div>
    )
}
