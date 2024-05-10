export const setPrice = (item, price) => {
	return {
		type: "SET_PRICE",
		item,
		price,
	};
};
