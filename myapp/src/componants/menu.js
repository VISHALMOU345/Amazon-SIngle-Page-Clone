import React from "react";
import second from './css/menu.module.css';
class Menu extends React.Component {

      render() {
            return (
                  <>
                        <div className={second.row2}>
                              <ul>
                                    <li><i class="fa-sharp fa-solid fa-bars"></i>All</li>
                                    <li>Amazon MiniTV</li>
                                    <li>Sell</li>
                                    <li>Best Seller</li>
                                    <li>Mobiles</li>
                                    <li>Today's Deals</li>
                                    <li>Customer Service</li>

                                    {/* <li>New Realeases</li>
                                    <li>Electronics</li>
                                    <li>Prime</li>
                                    <li>Home & Kitchen</li>
                                    <li>Amazon Pay</li> */}
                              </ul>
                        </div>
                        <div className={second.row3}>
                              <p>1-16 of over 8,000 results for <r>"laptop"</r></p>
                              <select>
                                    <option value="Featured">Sort by :Featured</option>
                                    <option value="Price High To Low">Price High To Low</option>
                                    <option value="Price Low To High">Price Low To High</option>
                                    <option value="Newest Arrivals">Newest Arrivals</option>
                              </select>
                              
                        </div>
                        <hr/>
                  </>
            );
      }

}

export default Menu;