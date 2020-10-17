import React from 'react';

export default function DiscussionBox(props) {
    return <div className="card">
        <div className="card-body">
            {props.count + " Posts"}
            </div>
    </div>;
}