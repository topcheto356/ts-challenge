import React from 'react';

interface VehicleProps {
	vehicles: {
		name: string;
		imgUrl: string;
	}[];
}

const Vehicles: React.FC<VehicleProps> = (props) => {
	return (
		<div className='vehicles'>
			{props.vehicles.map((vehicle, i) => {
				return (
					<div className='vahicle' key={`vehicle-${i + 1}`}>
						<div className='vahicle__img-container'>
							<img src={vehicle.imgUrl} alt={`vehicle-${i + 1}`}></img>
						</div>
						<div className='vahicle__name'>{vehicle.name}</div>
					</div>
				);
			})}
		</div>
	);
};

export default Vehicles;
