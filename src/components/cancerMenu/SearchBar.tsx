import { ChangeEvent, useState } from 'react';
import '../../styles/componentStyles/cancerMenuStyles/SearchBarStyles.css';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import { CancerData, cancerData } from '../../data/CancerData';

export default function SearchBar() {
	const [filteredData, setFilteredData] = useState<CancerData[]>([]);
	const [wordEntered, setWordEntered] = useState('');

	const handleFilter = (event:ChangeEvent) => {
		if(!(event.target instanceof HTMLInputElement)) return;
		const searchWord = event.target.value;
		setWordEntered(searchWord);
		const newFilter = Object.values(cancerData).filter((value) => {
			return value.name
				.toLowerCase()
				.includes(searchWord.toLowerCase());
		});

		if (searchWord === '') {
			setFilteredData([]);
		} else {
			setFilteredData(newFilter);
		}
	};

	const clearInput = () => {
		setFilteredData([]);
		setWordEntered('');
	};

	return (
		<div className="search">
			<div className="searchInputs">
				<input
					type="text"
					placeholder="Search cancer list"
					value={wordEntered}
					onChange={handleFilter}
				/>
				<div className="searchIcon">
					{filteredData.length === 0 ? (
						<SearchIcon />
					) : (
						<CloseIcon
							id="clearBtn"
							onClick={clearInput}
						/>
					)}
				</div>
			</div>

			{filteredData.length !== 0 && (
				<div className="dataResult">
					{filteredData
						.slice(0, 15)
						.map((value, index) => {
							return (
								<Link
									className="dataItem"
									to={value.url}
								>
									<p>{value.name} </p>
								</Link>
							);
						})}
				</div>
			)}
		</div>
	);
}
