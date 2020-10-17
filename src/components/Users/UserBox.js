import React from 'react';

export default function UserBox(props) {
    return <div className="card">
        <div className="card-body">
            {props.count + " Users"}
            </div>
    </div>;
}