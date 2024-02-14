import React from "react";

class ClassComp extends React.Component {

    constructor() {
        super();
    }

    componentDidMount () {
        console.log("comp did mount");
    }

    render() {
        console.log("render");
        return (
            <h2>Class Component</h2>
        )
    }

}

export default ClassComp;