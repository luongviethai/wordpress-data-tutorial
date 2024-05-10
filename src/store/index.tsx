import { createReduxStore, register } from "@wordpress/data";

import * as actions from "./actions";
import { STORE_NAME } from "./constants";
import reducer from "./reducer";
import * as selectors from "./selectors";

export const storeConfig = {
	reducer,
	selectors,
	actions,
};

export const store = createReduxStore(STORE_NAME, storeConfig);

register(store);
