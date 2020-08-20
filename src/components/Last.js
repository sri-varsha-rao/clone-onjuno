import React from 'react';
import "./Last.css";
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';



export default function Last() {
    return (
        <div className="container" id="cont">
            
            <div id="big-text">
            Sign up early to save more
            </div>
            <div id="small-text">
            <pre>Depending on the level of your checking account,you’ll earn </pre>
            <pre>
            between 1.15%<sup>3</sup> to 2.15%<sup>1</sup> bonus rate.
            </pre>
            </div>
            <div className="row" id="cards">
            <div className="col-lg-4 d-flex align-items-stretch">
            <Card1/>
            </div>
            <div className="col-lg-4 d-flex align-items-stretch">
            <Card2/>
            </div>
            <div className="col-lg-4 d-flex align-items-stretch">
            <Card3/>
            </div>
            </div>
        </div>
    );
};

// <div class="container">
//     <div class="row">
//           <div class="col-lg-4 d-flex align-items-stretch"></div>
