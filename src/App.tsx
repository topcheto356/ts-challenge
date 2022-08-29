import React, { Fragment } from 'react';

import SearchBar from './components/SearchBar';
import Vehicle from './components/Vehicle';
import { getVehicles } from './controllers/vehicleController';

const App: React.FC = () => {
	const onSearchHandler = (keyword: string) => {
		const options = { limit: 8, offset: 8 };
		getVehicles(keyword, options);
	};

	return (
		<Fragment>
			<SearchBar onSearchHandler={onSearchHandler} />
			<Vehicle />
		</Fragment>
	);
};

export default App;
