import { useModalState } from "./hooks";

function Header() {
	const abc = useModalState((state) => state, []);
	console.log("abc", abc);

	return <div>Header</div>;
}

export default Header;
