import './Exhibit.css';
import IPAddress from './IPAddress';

//Component to contain all the metrics
const Exhibit = ({heading}) => {
	return (
		<div id="exhibit">
			<h3>{heading}</h3>
			<div id="grid">
				<IPAddress version={4}/>
				<IPAddress version={6}/>
			</div>
		</div>
	)
}

export default Exhibit;
