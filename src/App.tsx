import "./App.css";
import Header from "./Header";
import withRegistryProvider from "./withRegistryProvider";

const App = withRegistryProvider(() => {
	return (
		<>
			<div>
				<p>Test</p>
			</div>
			<Header />
		</>
	);
});

export default App;
