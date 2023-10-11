import "./panel-styles.css";

import { useState, useEffect } from "react";

//Container to display IP Address(IPv4 or IPv6)
function IPAddress({version}) {

    // State to store the address
    const [address, setAddress] = useState({ip: "...."});

    //When component is mounted get the ipaddress of the client machine
    useEffect(() => {
        
        let url;

        //Make a request to ipify API endpoint
        if (version === 4) {
            url = "https://api.ipify.org?format=json";
        }
        else {
            url = "https://api64.ipify.org?format=json";
        }

        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setAddress(data);
        })

    }, [])

    return (
        <div id="ip-div">
            <h4>{version === 4 ? "IPv4:" : "IPv6:"}</h4>
            <h3 id="ip-address">{address.ip}</h3>
        </div>
    )
}

export default IPAddress;
