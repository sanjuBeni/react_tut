import React from "react";  
import { Link, Outlet } from "react-router-dom";

function Contact() {
    const obj = {
        data : [1,2,3,4]
    }

    return (
        <>
            <h2>This Contact page</h2>
            <Link to='company?age=20' state={obj}>Company</Link>
            <Outlet/>
        </>
    )

}

export default Contact;
