import React from 'react';

interface VehicleProps {
	vehicles: {
		name: string;
		imgUrl: string;
	}[];
}

const Vehicle: React.FC<VehicleProps> = () => {
	return (
		<div>
			<div>
				<img src='#' alt='vehicle'></img>
			</div>
			<div>vehicle name</div>
		</div>
	);
};

export default Vehicle;
