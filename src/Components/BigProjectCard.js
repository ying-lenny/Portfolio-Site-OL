import React from "react";

function BigProjectCard(props) {
    const {
        project: { id, hello },
    } = props;

    return (
        <div id={id}>
            <h1>{hello}</h1>
        </div>
    )
}

export default BigProjectCard;