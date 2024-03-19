import React, { useEffect, useRef, useState } from "react";

function LastProps(props) {
    let lastPropsRef = useRef();
    const [lastProps, setLastProps] = useState(null);
    useEffect(() => {
        lastPropsRef.current = props.count
    })
    return (
        <>
            <h2>Last props{lastPropsRef.current}</h2>
            <h2>Latest props{props.count}</h2>
        </>
    )
}

export default LastProps;