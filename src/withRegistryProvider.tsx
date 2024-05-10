import { createHigherOrderComponent } from "@wordpress/compose";
import {
	createRegistry,
	RegistryProvider,
	withRegistry,
} from "@wordpress/data";
import { useMemo } from "@wordpress/element";

import { storeConfig } from "./store";
import { STORE_NAME } from "./store/constants";

const withRegistryProvider = createHigherOrderComponent(
	(WrappedComponent) =>
		withRegistry(
			({ initialState, registry, useSubRegistry = true, ...props }) => {
				if (!useSubRegistry) {
					return <WrappedComponent registry={registry} {...props} />;
				}

				const subRegistry = useMemo(() => {
					const newRegistry = createRegistry({}, registry);
					newRegistry.registerStore(STORE_NAME, {
						...storeConfig,
						initialState,
					});
					return newRegistry;
					// eslint-disable-next-line react-hooks/exhaustive-deps
				}, [registry]);

				return subRegistry ? (
					<RegistryProvider value={subRegistry}>
						<WrappedComponent registry={subRegistry} {...props} />
					</RegistryProvider>
				) : null;
			}
		),
	"withRegistryProvider"
);

export default withRegistryProvider;
