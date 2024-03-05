import axios from "axios";
import {useCallback, useState } from "reaact";
import Child from "./Child";

export default function Callback() {
    const [toggle, setToggle ] = useState(false);
    const [data, setData] = useState("how are you my dear !");

    const returnCommit = useCallback (
        (name) => {

        return data +name;
        },
        [data]
    );

    return (
        <div className="App">
            <child returnComment={returnComment} />
            <button 
            onClick={() => {
                setToggle(!toggle);
            }}
            >
                {""}
                Toggle
            </button>
            {toggle && <h1> toggle</h1>}
        </div>
    );
        }
        