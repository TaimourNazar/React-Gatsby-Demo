import React from 'react';

export default function Fruit({pageContext}){
    
    console.log(pageContext)
    return <div>
            <h1>{pageContext.name}</h1>
            <h3>Description</h3>
            <p>{pageContext.desc}</p>
        </div>
    
}