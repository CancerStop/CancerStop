import { GiMedicines } from 'react-icons/gi';
import { MdLocalHospital } from 'react-icons/md';
import { BiLineChart } from 'react-icons/bi';
import { GiArchiveResearch } from 'react-icons/gi';
import { GiDna2 } from 'react-icons/gi';
import { GrContact } from 'react-icons/gr';
import { FaDonate } from 'react-icons/fa';
import { BiQuestionMark } from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';

export const SidenavData = [
    {
        title: 'Home',
        isInternal: true,
        path:'/',
        icon: <FaHome />,
    },
    {
        title: 'Search',
        isInternal: false,
        path:'https://cse.google.com/cse?cx=004715292727045167679:c87ei5ji6we',
        icon: <GiArchiveResearch />,
    },
    {
        title: 'Approved Drugs',
        isInternal: false,
        path:'https://www.cancer.gov/about-cancer/treatment/drugs/cancer-type',
        icon: <GiMedicines />
    },
    {
        title: 'Clinical Trials',
        isInternal: false,
        path: 'https://www.clinicaltrials.gov/ct2/home',
        icon: <MdLocalHospital />,
        cName: 'nav-text'
    },
    {
        title: 'Genes & More',
        isInternal: true,
        path: '/genes-and-more',
        icon: <GiDna2 />,
    },
    {
        title: 'Survival Curves',
        isInternal: false,
        path: 'https://seer.cancer.gov/explorer/application.html?site=1&data_type=4&graph_type=6&compareBy=age_range&chk_age_range_16=16&chk_age_range_62=62&chk_age_range_122=122&chk_age_range_160=160&chk_age_range_166=166&sex=1&race=1&hdn_stage=101&advopt_precision=1&advopt_show_ci=on&advopt_display=2',
        icon: <BiLineChart />,
    },
    {
        title: 'Contact Us',
        isInternal: true,
        path: '/contact-us',
        icon: <GrContact />,
     },
    {
        title: 'Donate',
        isInternal: true,
        path: '/donate',
        icon: <FaDonate />,
    },
    {
        title: 'FAQ',
        isInternal: true,
        path: '/faq',
        icon: <BiQuestionMark />,
    }
]