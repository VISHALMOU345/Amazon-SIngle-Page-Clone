import React from "react";
import first from './css/header.module.css';

export default class Header extends React.Component {

      render() {
            return (
                  <>
                        <div className={first.row1}>
                              <ul>
                                    <li><img src="/img/logo.png" /><in>.in</in></li>
                                    <li className={first.he}><p>Hello</p>
                                          <span className={first.icon2}><ion-icon name="location-outline"></ion-icon> Select your address</span></li><li>
                                          <searchbox className={first.searchbox}>
                                                <select className={first.drop1}>
                                                      <option value="All Categories">All</option>
                                                      <option value="Alexa Skills">Alexa Skills</option>
                                                      <option value="Amazon Devices">Amazon Devices</option>
                                                      <option value="Amazon Devices">Amazon Fresh</option>
                                                </select>
                                                <input className={first.searchtextfilled} type="text" value='Search Amazon.in' />
                                                <searchicon className={first.searchlogo}><s1 class="fa-solid fa-magnifying-glass"></s1></searchicon>            
                                          </searchbox>
                                    </li>
                                    <li className={first.en}><img src='img/Flag-india.webp'/><select></select>EN</li>
                                    <li className={first.hs}>Hello, Sign in</li>
                                    <li className={first.al}>Accounts & Lists</li>
                                    <li className={first.ro}>Returns <br/>& Orders</li>
                                    <li className={first.ct}><img src="img/02.jpg.jpg"/></li>
                                    <li></li>
                              </ul>
                        </div>
                  </>
            );

      }
}
