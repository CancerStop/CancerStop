import SearchBar from './searchBar/SearchBar';
import CancerMenuList from './cancerMenuList/CancerMenuList';

export default function CancerMenu() {
    return (
        <div className='cancerMenu'>
            <SearchBar />
            <CancerMenuList />
        </div>
    )
}
