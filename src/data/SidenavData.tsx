import { GiMedicines } from 'react-icons/gi';
import { MdLocalHospital } from 'react-icons/md';
import { BiLineChart } from 'react-icons/bi';
import { GiArchiveResearch } from 'react-icons/gi';
import { GiDna2 } from 'react-icons/gi';
import { GrContact } from 'react-icons/gr';
import { FaDonate } from 'react-icons/fa';
import { BiQuestionMark } from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';

export const SidenavData: {
	title: string;
	path: string;
	icon: JSX.Element;
}[] = [
	{
		title: 'Home',
		path: '/',
		icon: <FaHome />,
	},
	{
		title: 'Search',
		path: '/search',
		icon: <GiArchiveResearch />,
	},
	{
		title: 'Approved Drugs',
		path: 'https://www.cancer.gov/about-cancer/treatment/drugs/cancer-type',
		icon: <GiMedicines />,
	},
	{
		title: 'Clinical Trials',
		path: '/clinical-trials',
		icon: <MdLocalHospital />
	},
	{
		title: 'Genes & More',
		path: '/genes-and-more',
		icon: <GiDna2 />,
	},
	{
		title: 'Survival Curves',
		path: 'https://seer.cancer.gov/explorer/application.html?site=1&data_type=4&graph_type=6&compareBy=age_range&chk_age_range_16=16&chk_age_range_62=62&chk_age_range_122=122&chk_age_range_160=160&chk_age_range_166=166&sex=1&race=1&hdn_stage=101&advopt_precision=1&advopt_show_ci=on&advopt_display=2',
		icon: <BiLineChart />,
	},
	{
		title: 'Contact Us',
		path: '/contact-us',
		icon: <GrContact />,
	},
	{
		title: 'Donate',
		path: '/donate',
		icon: <FaDonate />,
	},
	{
		title: 'FAQ',
		path: '/faq',
		icon: <BiQuestionMark />,
	},
];
