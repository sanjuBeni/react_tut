import React from "react";  
import { useLocation } from "react-router-dom";

export default function Company() {
    const location = useLocation();
    console.log(location);
    return (
        <>
            <h2>This is Company Page</h2>
            <p>This page for company info...</p>
        </>
    )
}