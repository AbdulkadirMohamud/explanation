import React, {useEffect }   from "react";

function Child({returnComment }) {
    useEffect(() => {
        console.log ("FUNCTION IS MENTIONED ");

    }, [returnComment]);

    return<div>{returnComment ("Abdulkadir ")}</div>
}

export default Child;