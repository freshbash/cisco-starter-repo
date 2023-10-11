import './panel-styles.css';
import { useEffect, useState } from "react";

//Create a WebSocket object
const socket = new WebSocket("ws://localhost:55455");

//Component to display latency
function Latency() {
    const [fontColor, setFontColor] = useState('green')
    const [latency, setLatency] = useState(0);

    useEffect(() => {
        //Listen for messages from the node server
        socket.addEventListener("message", (e) => {
            const timeElapsed = Date.now() - e.data;
            //Update state
            setLatency(timeElapsed);

            //Set color
            if (timeElapsed > 100) {
                setFontColor('red');
            } else if (timeElapsed > 40 && timeElapsed <= 100) {
                setFontColor('orange');
            } else if (timeElapsed > 20 && timeElapsed <= 40) {
                setFontColor('lightgreen');
            } else {
                setFontColor('darkgreen');
            }
        })
    })

    return (
        <div id="latency-div">
            <h4>Latency:</h4>
            <h2 style={{ color:fontColor }}><span>{latency}</span> ms</h2>
            <div id="legend">
                <div>
                    <div id="dark-green"></div>
                    <span>Excellent(0 - 20)</span>
                </div>
                <div>
                    <div id="light-green"></div>
                    <span>Good(21 - 40)</span>
                </div>
                <div>
                    <div id="orange"></div>
                    <span>Acceptable(41 - 100)</span>
                </div>
                <div>
                    <div id='red'></div>
                    <span>Bad(100 and above)</span>
                </div>
            </div>
        </div>
    )
}

export default Latency;
