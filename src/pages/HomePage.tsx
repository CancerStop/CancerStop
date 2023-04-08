import CancerMenu from '../components/cancerMenu/CancerMenu';
import SubHeader from '../components/SubHeader';

export default function HomePage() {
	return (
		<div className="homepage">
			<SubHeader>A quick reference guide to different types of cancers</SubHeader>
			<div
				style={{
					textAlign: 'center',
					color: 'gray',
					marginTop: '5px',
				}}
			>
				From genomics to therapies - See what the public
				databases and resources say
			</div>
			<CancerMenu />
		</div>
	);
}
