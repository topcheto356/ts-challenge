import React, { Fragment } from 'react';

import SearchBar from './components/SearchBar';
import Vehicle from './components/Vehicle';
import {
	getVehicles,
	getNeededVehicleData,
} from './controllers/vehicleController';

const App: React.FC = () => {
	const onSearchHandler = async (keyword: string) => {
		const options = { limit: 8, offset: 8 };
		const allVehiclesData = await getVehicles(keyword, options);

		getNeededVehicleData(allVehiclesData);
	};

	return (
		<Fragment>
			<SearchBar onSearchHandler={onSearchHandler} />
			<Vehicle />
		</Fragment>
	);
};

export default App;
