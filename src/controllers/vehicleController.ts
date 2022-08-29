import axios from 'axios';

interface options {
	limit?: number;
	offset?: number;
}

interface vehiclesObject {
	data: {
		attributes: {
			name: string;
		};
		relationships: {
			primary_image: {
				data: {
					id: string;
				};
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

export const getVehicles = async (keyword: string, options?: options) => {
	try {
		let link: string = `https://search.outdoorsy.com/rentals?filter[keywords]=${keyword}`;

		if (options) {
			for (const option in options) {
				link += `&page[${option}]=${options[option as keyof options]}`;
			}
		}

		const res = await axios.get(link);

		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export const getNeededVehicleData = (allVehiclesData: vehiclesObject) => {
	const allVehicles: { name: string; imgUrl: string }[] = [];

	allVehiclesData.data.forEach((vehicle) => {
		const vehicleName = vehicle.attributes.name;
		const imgId = vehicle.relationships.primary_image.data.id;

		let imgUrl: string = '';

		for (const image of allVehiclesData.included) {
			if (image.id === imgId && image.type === 'images') {
				imgUrl = image.attributes.url;
				break;
			}
		}

		allVehicles.push({ name: vehicleName, imgUrl });
	});

	return allVehicles;
};
