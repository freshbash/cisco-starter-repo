import './Exhibit.css';

//Component to contain all the metrics
const Exhibit = ({heading}) => {
	return (
		<div id="exhibit">
			<h3>{heading}</h3>
			<div id="grid"></div>
		</div>
	)
}

export default Exhibit;
