import React, { ChangeEvent, Fragment, MouseEventHandler, ReactElement } from "react";

type carProps = {
    name: string,
    age: number,
    onChangeName?: any,
    onDelete?: any,
}


export default (props: carProps) => (
    <div style={{
        border: "2px solid #ccc",
        marginBottom: '10px', 
        display: 'inline-block',
        padding: '10px',
    }}>
        <p>Name car: {props.name}</p>
        <span>Year: {props.age}</span>
        <input type="text" onChange={props.onChangeName} value={props.name}/>
        <button onClick={props.onDelete}>Delete</button>
    </div>
)
