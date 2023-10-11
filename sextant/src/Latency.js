import './Latency.css';
import { useEffect, useState } from "react";

//Create a WebSocket object
const socket = new WebSocket("ws://localhost:55455");

//Component to display latency
function Latency() {
    const [latency, setLatency] = useState(0);

    //Listen for messages from the node server
    socket.addEventListener("message", (e) => {
    const timeElapsed = (Date.now() - e.data) / 1000;

    //Update state
    setLatency(timeElapsed);
    })

    return (
        <div id="latency-div">
            <h4>Latency</h4>
            <h3>{latency} seconds</h3>
        </div>
    )
}

export default Latency;
