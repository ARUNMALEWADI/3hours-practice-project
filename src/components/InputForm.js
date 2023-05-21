import { useState } from "react"
import { useContext } from "react";
import React from 'react'
import Display from "./Display";
import Additem from "./Additem";
const InputForm=()=>{
    
    const [id,setid]=useState();
    const [Pname,setname]=useState()
    const [category,setcategory]=useState('')
    const [price,setprice]=useState()
    const [formisvalid,setform]=useState(false)
    const Submithandler=()=>{
        setform(true)

    }
    function formhandler(){
      setform(false)

    }
    

    const Idhandler=(e)=>{
        setid(e.target.value)

    }
    const Pricehandler=(e)=>{
        setprice(e.target.value)

    }
    const Pnamehandler=(e)=>{
        setname(e.target.value)

    }
    const Categoryhandler=(e)=>{
        setcategory(e.target.value)

    }
    console.log(id,price,Pname,category);
    return <React.Fragment>
      <div >
        <label>Product ID</label>
        <input type='number'  onChange={Idhandler}></input>
      </div>
      <div>
        <label>Price</label>
        <input type='Number'  onChange={Pricehandler}></input>
      </div>
      <div>
        <label>Product Name</label>
        <input type='text' onChange={Pnamehandler}></input>
      </div>
      <div>
        <label>Category</label>
        <select type='select'  onClick={Categoryhandler}>
            <option>Electronics</option>
            <option>Food</option>
            <option>Skincare</option>
        </select>
        <button disabled={formisvalid} onClick={Submithandler}>Add Product</button>
      </div>
      <Display ></Display>
      {
      formisvalid&&<Additem id={id} Pname={Pname} category={category} price={price} setform={formhandler}></Additem>
     
      }
    


    </React.Fragment>

}
export default InputForm