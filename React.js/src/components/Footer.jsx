import React from "react";

function Footer(props){
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

export default Footer;