import React, { Fragment } from 'react';

interface VehicleProps {
	vehicles: {
		name: string;
		imgUrl: string;
	}[];
}

const Vehicle: React.FC<VehicleProps> = (props) => {
	return (
		<Fragment>
			{props.vehicles.map((vehicle, i) => {
				return (
					<div key={`vehicle-${i + 1}`}>
						<div>
							<img src={vehicle.imgUrl} alt={`vehicle-${i + 1}`}></img>
						</div>
						<div>{vehicle.name}</div>
					</div>
				);
			})}
		</Fragment>
	);
};

export default Vehicle;
