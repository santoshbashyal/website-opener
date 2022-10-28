import React from "react";


const Button = ({link,name}) =>{
    return <a href={link} target="blank">
        <button className="button">{name}</button></a>
}

export default Button;