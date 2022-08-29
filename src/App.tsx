import React, { Fragment } from 'react';

import SearchBar from './components/SearchBar';
import Vehicle from './components/Vehicle';

const App: React.FC = () => {
	const onSearchHandler = (keyword: string) => {
		console.log(keyword);
	};

	return (
		<Fragment>
			<SearchBar onSearchHandler={onSearchHandler} />
			<Vehicle />
		</Fragment>
	);
};

export default App;
