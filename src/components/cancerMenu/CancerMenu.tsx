import SearchBar from './SearchBar';
import CancerMenuList from './CancerMenuList';
import '../../styles/componentStyles/cancerMenuStyles/CancerMenuStyles.css';

export default function CancerMenu() {
    return (
        <div className='cancerMenu'>
            <SearchBar />
            <CancerMenuList />
        </div>
    )
}
