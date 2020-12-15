import React from "react";

export default function TeammateCard(props) {
    const {values} = props
    return (
        <div className='card'>
            <h1>{values.name}</h1>
            <h2>{values.email}</h2>
            <h2>{values.role}</h2>
        </div>
    )
}