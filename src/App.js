import './styles/GlobalStyles.css';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/generalPages/HomePage';
import FaqPage from './pages/generalPages/FaqPage';
import ContactUsPage from './pages/generalPages/ContactUsPage';
import DonatePage from './pages/generalPages/DonatePage';
import GenesAndMore from './pages/generalPages/GenesAndMore';
import NotFoundPage from './pages/generalPages/NotFound.jsx';

import AcuteLymphocyticLeukemia from './pages/cancerPages/leukemia/AcuteLymphocyticLeukemia';
import AcuteMonocyticLeukemia from './pages/cancerPages/leukemia/AcuteMonocyticLeukemia';
import AcuteMyeloidLeukemia from './pages/cancerPages/leukemia/AcuteMyeloidLeukemia';
import ChronicLymphocyticLeukemia from './pages/cancerPages/leukemia/ChronicLymphocyticLeukemia';
import ChronicMyeloidLeukemia from './pages/cancerPages/leukemia/ChronicMyeloidLeukemia';

import BreastCancerAndLuminalA from './pages/cancerPages/breast/BreastCancerAndLuminalA';
import BreastCancerAndTripleNegativeOrLuminalA from './pages/cancerPages/breast/BreastCancerAndTripleNegativeOrLuminalA';
import BreastCancerAndLuminalB from './pages/cancerPages/breast/BreastCancerAndLuminalB';
import BreastCancerAndHER2Enriched from './pages/cancerPages/breast/BreastCancerAndHER2Enriched';

import AdenocarcinomaInLungs from './pages/cancerPages/lungAndBronchus/AdenocarcinomaInLungs';

import Pancreas from './pages/cancerPages/Pancreas';
import LiverLymphaticBileAndDuct from './pages/cancerPages/LiverLymphaticBileAndDuct';
import Glioblastoma from './pages/cancerPages/Glioblastoma';
import SkinMelanoma from './pages/cancerPages/SkinMelanoma';
import Myeloma from './pages/cancerPages/Myeloma';
import Ovaries from './pages/cancerPages/Ovaries';
import Prostate from './pages/cancerPages/Prostate';
import SmallIntestine from './pages/cancerPages/SmallIntestine';
import Stomach from './pages/cancerPages/Stomach';
import Testis from './pages/cancerPages/Testis';

import Colon from './pages/cancerPages/colonAndRectum/Colon';
import Rectum from './pages/cancerPages/colonAndRectum/Rectum';

import AdenocarcinomaInEsophagus from './pages/cancerPages/esophagus/AdenocarcinomaInEsophagus';
import SquamousCellCarcinoma from './pages/cancerPages/esophagus/SquamousCellCarcinoma';

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
                    <Route path='/genes-and-more' component={GenesAndMore} />

                    <Route path='/acute-lymphocytic-leukemia' component={AcuteLymphocyticLeukemia} />
                    <Route path='/acute-monocytic-leukemia' component={AcuteMonocyticLeukemia} />
                    <Route path='/acute-myeloid-leukemia' component={AcuteMyeloidLeukemia} />
                    <Route path='/chronic-lymphocytic-leukemia' component={ChronicLymphocyticLeukemia} />
                    <Route path='/chronic-myeloid-leukemia' component={ChronicMyeloidLeukemia} />

                    <Route path='/liver-lymphatic-bile-and-duct' component={LiverLymphaticBileAndDuct} />
                    <Route path='/pancreas' component={Pancreas} />
                    <Route path='/glioblastoma' component={Glioblastoma} />
                    <Route path='/melanoma-of-the-skin' component={SkinMelanoma} />
                    <Route path='/myeloma' component={Myeloma} />
                    <Route path='/ovaries' component={Ovaries} />
                    <Route path='/prostate' component={Prostate} />
                    <Route path='/small-intestine' component={SmallIntestine} />
                    <Route path='/stomach' component={Stomach} />
                    <Route path='/testis' component={Testis} />

                    <Route path='/breast-cancer-and-luminal-a' component={BreastCancerAndLuminalA} />
                    <Route path='/breast-cancer-and-triple-negative-or-luminal-a' component={BreastCancerAndTripleNegativeOrLuminalA} />
                    <Route path='/breast-cancer-and-luminal-b' component={BreastCancerAndLuminalB} />
                    <Route path='/breast-cancer-and-HER2-enriched' component={BreastCancerAndHER2Enriched} />

                    <Route path='/colon' component={Colon} />
                    <Route path='/rectum' component={Rectum} />

                    <Route path='/adenocarcinoma-in-esophagus' component={AdenocarcinomaInEsophagus} />
                    <Route path='/adenocarcinoma-in-lungs' component={AdenocarcinomaInLungs} />
                    <Route path='/squamous-cell-carcinoma' component={SquamousCellCarcinoma} />
                    <Route path='/melanoma-of-the-skin' component={SkinMelanoma} />
                    <Route path='/myeloma' component={Myeloma} />
                    <Route path='/ovaries' component={Ovaries} />
                    <Route path='/prostate' component={Prostate} />
                    <Route path='/small-intestine' component={SmallIntestine} />
                    <Route path='/stomach' component={Stomach} />
                    <Route path='/testis' component={Testis} />

                    <Route component={NotFoundPage} />

                </Switch>
            </Router>

            <Router>
                <Footer />
            </Router>
        </div>
    )
}
