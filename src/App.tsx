import React, { Fragment } from 'react';

import SearchBar from './components/SearchBar';
import Vehicle from './components/Vehicle';
import { getVehicles } from './controllers/vehicleController';

interface vehiclesObject {
	data: {
		attributes: {
			name: string;
		};
		relationships: {
			primary_image: {
				id: string;
			};
		};
	}[];

	included: {
		id: string;
		type: string;
		attributes: {
			url: string;
		};
	}[];
}

const App: React.FC = () => {
	const onSearchHandler = async (keyword: string) => {
		const options = { limit: 8, offset: 8 };
		const allVehiclesData: vehiclesObject = await getVehicles(keyword, options);
	};

	return (
		<Fragment>
			<SearchBar onSearchHandler={onSearchHandler} />
			<Vehicle />
		</Fragment>
	);
};

export default App;
