import React from "react";
import Header from "./header";
import Menu from "./menu";
import Body from "./bodyData";
import FetchData from "./fetchData";
import Slider from "../slider";




export default class Home extends React.Component
{
      render()
      {
            return(
                  <>
                        
                        <Header/>
                        <Menu/>
                        <Slider/>
                        <Body/>
                        <FetchData/>
                        
                  </>
            );
      }
}

