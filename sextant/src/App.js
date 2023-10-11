import './App.css';

//Banner component
function Banner() {
	return (
		<div id="banner">
			<h1>Sextant</h1>
		</div>
	)
}

//Component to contain all the metrics
const Exhibit = () => {
	return (
		<div id="exhibit">
			<h3>System Performance Metrics</h3>
			<div id="metric-grid"></div>
		</div>
	)
}

function App() {
  	return (
		<div>
			<Banner />
			<Exhibit />
		</div>		
  	);
}

export default App;
