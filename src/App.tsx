import React, { Fragment } from 'react';

import SearchBar from './components/SearchBar';
import Vehicle from './components/Vehicle';

const App: React.FC = () => {
	return (
		<Fragment>
			<SearchBar />
			<Vehicle />
		</Fragment>
	);
};

export default App;
