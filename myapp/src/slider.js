import React, { useState } from "react";
import './index.css'
export default function Slider() {
    const [img, setImg] = useState(0);
    const Pics = ['A1.jpg', 'A7.jpg', 'A2.jpg', 'A3.jpg', 'A4.jpg', 'A5.jpg', 'A6.jpg'];


    return (
        <div style={{ 'height': '84vh' }}>
            <img src={'./img/' + Pics[img]} style={{ 'width': '100%', 'margin-top': '-9px' }} />
            <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'position': 'relative', 'top': '-18rem' }}>

                
                <button className="btn" onClick={() => { setImg(img - 1); if (img == 0) { setImg(Pics.length - 1); } }}>{'<'}</button>
                <button className="btn" onClick={() => { setImg(img + 1); if (img == Pics.length - 1) { setImg(0); } }}>{'>'}</button>
            </div>
        </div>
    )
}