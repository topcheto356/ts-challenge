import axios from 'axios';

interface options {
	limit?: number;
	offset?: number;
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
