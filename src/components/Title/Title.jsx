import React from 'react';

const Title = (props) => {
    return (
        <>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </>
    );
};

export default Title;
