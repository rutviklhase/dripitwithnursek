import { ReactDOM } from "react";
import React from "react";
import { useState } from "react";
import "./Admin.scss"




export default function Admin()
{ 
    async function handleclick()
    {
        var img = document.getElementById("img").value;
        var price = document.getElementById("price").value;
        var description = document.getElementById("description").value;
        
        let result = await fetch("http://localhost:5000/register",{
            method: 'post',
            body: JSON.stringify({img, price, description}) ,
            headers:{
                'Content-Type' : 'application/json'
            }
        });

        result = await result.json();
        console.log(result);
    }

    return(
        <div className="AdminPanel">
            <h1 classname="addaservice">Add A Service</h1>
            Image URL : <input id = "img" className="inputBox"/>
            Price <input id = "price" className="inputBox" type="text"/>
            Description<input id = "description" className="inputBox" type="text"/>
            <button onClick={handleclick}>Submit</button>
         </div>
    )
}