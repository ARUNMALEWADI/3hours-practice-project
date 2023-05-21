import React from "react";
import Display from "./Display"
const Additem=(props)=>{
    const item=document.createElement('li');
    item.textContent=props.id+"-" +props.category+"-"+props.Pname+"-"+props.price+"-";
    item.setAttribute('id',`${props.id}`);
    
    localStorage.setItem(props.id,[props.id,props.category,props.Pname,props.price])
    const del=document.createElement('button')
    del.textContent="Delete"
    item.appendChild(del)
    del.addEventListener('click',()=>{
        del.parentElement.remove()
       
        localStorage.removeItem(del.parentElement.getAttribute('id'))
    })
    if(props.category=="Electronics")
    {  
       const tool=document.getElementById("Electronics")
       tool.appendChild(item);
    }
    if(props.category=="Food")
    {
       const tool=document.getElementById("Food")
     
       tool.appendChild(item);
    }
    if(props.category=="Skincare")
    {
       const tool=document.getElementById("Skincare")
       tool.appendChild(item);
    }
    

    return <React.Fragment>  {
        props.setform()
    }
    </React.Fragment>
}
export default Additem