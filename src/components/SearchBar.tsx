import React, { useEffect, useRef, useState } from 'react';

interface SearchBarProps {
	onSearchHandler: (searchedVehicle: string) => void;
}

interface onChangeHandlerEvent {
	target: { value: string };
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
	const [searchedVehicle, setSearchedVehicle] = useState('');
	const timerRef: { current: any } = useRef(null);

	const onChangeHandler = (event: onChangeHandlerEvent) => {
		const keyword = event.target.value;
		setSearchedVehicle(keyword);
	};

	useEffect(() => {
		if (searchedVehicle)
			timerRef.current = setTimeout(() => {
				props.onSearchHandler(searchedVehicle);
			}, 2000);

		return () => clearTimeout(timerRef.current);
	}, [searchedVehicle]);

	return (
		<div className='search-bar'>
			<input
				className='search-bar__input'
				type='text'
				placeholder='Seach...'
				onChange={onChangeHandler}
				value={searchedVehicle}
			></input>
		</div>
	);
};

export default SearchBar;
