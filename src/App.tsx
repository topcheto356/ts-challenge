import React, { Fragment, useState } from 'react';

import SearchBar from './components/SearchBar';
import Vehicle from './components/Vehicle';
import {
	getVehicles,
	getNeededVehicleData,
} from './controllers/vehicleController';

const App: React.FC = () => {
	const [vehicles, setVehicles] = useState<{ name: string; imgUrl: string }[]>(
		[]
	);

	const onSearchHandler = async (keyword: string) => {
		const options = { limit: 8, offset: 8 };
		const allVehiclesData = await getVehicles(keyword, options);

		const neededVehicleData = getNeededVehicleData(allVehiclesData);

		setVehicles(neededVehicleData);
	};

	return (
		<div className='app'>
			<SearchBar onSearchHandler={onSearchHandler} />
			<Vehicle vehicles={vehicles}></Vehicle>
		</div>
	);
};

export default App;
