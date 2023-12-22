import React from "react";
function  Input({label,type}){
    console.log();
    return (
        <div>
        <label htmlFor=""> {label}:</label> 
        <input type={type}/>
        </div>
    )
}
export default Input