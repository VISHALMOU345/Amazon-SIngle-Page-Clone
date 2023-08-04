import React,{useState,useEffect} from "react";
import fetchData from './css/fetchData.module.css';

export default function FetchData()
{
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then((data)=>{setProduct(data)})
    })

    const data=product.map((item)=>{
        return(
            <li className={fetchData.api}>
                <img src={item.image} width="100"/><br/>
                <p className={fetchData.title}>➤ {item.title}</p>
                <p className={fetchData.price}>₹{item.price}</p>
                <p className={fetchData.rating}>⭐⭐⭐⭐⭐ 5 - 𝙎𝙩𝙖𝙧𝙨</p>
                {/* <p className={fetchData.line}></p> */}
                
            </li>
        )
    })
    return(
        <>
        <div>
            <div className={fetchData.R}>Results</div>
        </div>
        <dvi>{data}</dvi>
        </>
    )
}