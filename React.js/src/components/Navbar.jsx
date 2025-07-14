import React from "react";

function Navbar(props) {
    return (
        <>
            <div>
                {props.title}
                <br />
                {props.price}
            </div>
        </>
    )
}

export default Navbar;