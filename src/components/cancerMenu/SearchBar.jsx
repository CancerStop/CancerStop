import { useState } from 'react';
import '../../styles/componentStyles/cancerMenuStyles/SearchBarStyles.css';
import { SearchBarData } from '../../data/SearchBarData';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';

export default function SearchBar() {
	const [filteredData, setFilteredData] = useState([]);
	const [wordEntered, setWordEntered] = useState('');

	const handleFilter = (event) => {
		const searchWord = event.target.value;
		setWordEntered(searchWord);

		const newFilter = SearchBarData.filter((value) => {
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
						.map((value, key) => {
							return (
								<Link
									className="dataItem"
									to={value.path}
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
