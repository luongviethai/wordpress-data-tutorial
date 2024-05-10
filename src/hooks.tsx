import { useSelect } from "@wordpress/data";
import { store } from "./store";

export const useModalState = <C extends (state: any, select: any) => any>(
	cb: C,
	deps: unknown[]
	// eslint-disable-next-line react-hooks/exhaustive-deps
): ReturnType<C> =>
	useSelect(
		(select) =>
			cb(
				{
					...select(store).getState(),
				},
				select
			),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		deps
	);
