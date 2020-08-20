import React from "react";
import "./Menu.css"
import "./Intro.css"
import mobile from "../images_1/juno-mobile-app@3x.png";
import flag from "../images_1/createaccount-homeaddress-flag@3x.png";
import gplay from "../images_1/googleplay@3x.png";
import apay from "../images_1/applepay@3x.png";
import Backed from "./Backed";
import {Form,Button,FormControl} from "react-bootstrap";


const Intro=()=> {
    return (
        <div className="container"  style={{paddingTop:180}}>
            <div className="row">
            <div className="col-6">
            <div style={{fontSize:52,fontWeight:"bold"}}>
            The Most Powerful Checking Account
            </div>
            <div style={{fontSize:22,paddingTop:20,fontWeight:"lighter"}}>
            Our checking account gives you higher returns
            than a savings account with no hidden fees.
            </div>
            <br/>
            <Form inline>
            <Form.Control type="text" placeholder="Enter Email address" size="lg" className="mr-lg-4" />
            <Button type="submit">Join Now</Button>
            </Form>
            <div className="row mt-5 ml-2">
            <img className="img-fluid" id="flag" src={flag} 
             alt="mobile image here"/> {'  '}
            336 spots left for Priority Access
            </div>
            <div className="row mt-5">
            <div className="col-4" >
            <img className="img-fluid" id="pay" src={gplay} 
             alt="mobile image here"/>
             </div>
             <div className="col-3" >
            <img className="img-fluid" id="pay" src={apay} 
             alt="mobile image here"/>
            </div>
            </div>
            </div>
            <div className="col-3">
            <img src={mobile} 
            width="500"
            height="700" alt="mobile image here"/>
            </div>

            </div>
            
            <Backed/>
        </div>
    );
};

export default Intro;
