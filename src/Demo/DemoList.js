import React, { useState } from "react";

const DemoList = (props) => {

    const { items } = props;
    const sortedAsseList = items.sort((a, b) => a - b);


    // const sortedDescList = items.sort((a, b) => b - a);
    return (
        <>
            {props.title && <h2>Descending order</h2>}
            {!props.title && <h2>Ascending Order</h2>}
            {props.title && sortedAsseList.map((item) => (
                <p key={Math.random()}>{item}</p>
            ))}
            {/* {!props.title && sortedDescList.map((item) => (
                <p key={Math.random()}>{item}</p>
            ))} */}
        </>
    )
}

export default React.memo(DemoList);