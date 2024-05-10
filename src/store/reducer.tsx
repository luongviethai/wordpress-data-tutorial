const DEFAULT_STATE = {
	prices: {},
	discountPercent: 0,
};

const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case "SET_PRICE":
			return {
				...state,
				prices: {
					...state.prices,
					[action.item]: action.price,
				},
			};

		case "START_SALE":
			return {
				...state,
				discountPercent: action.discountPercent,
			};
	}

	return state;
};

export default reducer;
