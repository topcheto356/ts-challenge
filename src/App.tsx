import React, { useState } from 'react';

import SearchBar from './components/SearchBar';
import Vehicles from './components/Vehicles';
import {
	getVehicles,
	getNeededVehicleData,
} from './controllers/vehicleController';
import { filteredVehicledData } from './Models/vehicles.model';

const App: React.FC = () => {
	const [vehicles, setVehicles] = useState<filteredVehicledData[]>([]);
	const [loadingText, setLoadingText] = useState(
		'Please, type a keyword in the seach bar'
	);

	const onSearchHandler = async (keyword: string) => {
		setLoadingText('Loading, please wait');

		const options = { limit: 8, offset: 8 };
		const allVehiclesData = await getVehicles(keyword, options);

		setVehicles([]);

		const neededVehicleData = getNeededVehicleData(allVehiclesData);

		if (neededVehicleData) {
			setVehicles(neededVehicleData);
		} else {
			setLoadingText('No vehicles found');
		}
	};

	return (
		<div className='app'>
			<SearchBar onSearchHandler={onSearchHandler} />
			{vehicles.length > 0 ? (
				<Vehicles vehicles={vehicles} />
			) : (
				<div className='app-loading'>{loadingText}</div>
			)}
		</div>
	);
};

export default App;
