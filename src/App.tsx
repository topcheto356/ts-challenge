import React, { useState } from 'react';

import SearchBar from './components/SearchBar';
import Vehicles from './components/Vehicles';
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
			<Vehicles vehicles={vehicles} />
		</div>
	);
};

export default App;
