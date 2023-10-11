import './App.css';
import Banner from './Banner.js';
import Exhibit from './Exhibit.js';
import IPAddress from './IPAddress';
import Latency from './Latency';

function App() {
  	return (
		<div>
			<Banner title={"Sextant"}/>
			<Exhibit heading={"Network Metrics"}>
				<IPAddress version={4} />
				<IPAddress version={6} />
				<Latency />
			</Exhibit>
		</div>		
  	);
}

export default App;
