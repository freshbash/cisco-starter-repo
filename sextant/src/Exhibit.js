import './Exhibit.css';

//Component to contain all the metrics
const Exhibit = props => {
	return (
		<div id="exhibit">
			<h3>{props.heading}</h3>
			<div id="grid">
				{props.children}
			</div>
		</div>
	)
}

export default Exhibit;
