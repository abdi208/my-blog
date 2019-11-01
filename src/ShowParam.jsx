import React from 'react';

function ShowParam(props) {
    return (
        <>
            <h1>You entered this parameter: {props.match.params.id}</h1>
            
        </>
    )
}

export default ShowParam;