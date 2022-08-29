import React, { useState } from 'react';

interface SearchBarProps {
	onSearchHandler: (searchedVehicle: string) => void;
}

interface onChangeHandlerEvent {
	target: { value: string };
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
	const [searchedVehicle, setSearchedVehicle] = useState('');

	const onChangeHandler = (event: onChangeHandlerEvent) => {
		const keyword = event.target.value;
		setSearchedVehicle(keyword);
	};

	return (
		<div>
			<input
				type='text'
				placeholder='Seach...'
				onChange={onChangeHandler}
				value={searchedVehicle}
			></input>
		</div>
	);
};

export default SearchBar;
