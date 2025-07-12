import React from "react"
function  Header({name,title})
{
    return(
        <div style={{background: 'yellow', padding:10}}>
            <h2>{title}</h2>
            
            <h3>{name}</h3>
            <p>my header </p>
        </div>
    );
}
export default Header;