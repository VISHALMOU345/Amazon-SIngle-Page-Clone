import React from "react";
import bodyData from './css/bodyData.module.css';

export default function Body() {
    return (
        <div>


            <div className={bodyData.main}>
                <div>
                    <p className={bodyData.p}>Delivery Day</p>
                    <li className={bodyData.one}><input type="checkbox"></input>Get It Today</li>
                    <li className={bodyData.one}><input type="checkbox"></input>Get It by Tomorrow</li>
                    <li className={bodyData.one}><input type="checkbox"></input>Get It in 2 Days</li>

                    <p className={bodyData.p}>Category</p>
                    <p className={bodyData.t}>Laptops Traditional Laptops</p>

                    <p className={bodyData.p}>Customer Review</p>

                </div>

                
            </div>


        </div>
    );
};