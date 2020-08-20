import React from 'react';
import seq from "../images_1/sequioa-image@3x.png";
import cons from "../images_1/consensys-logo@3x.png";
import poly from "../images_1/polychain-capital@3x.png";
import "./Backed.css";
import Hoard from './Hoard';


export default function Backed() {
    return (
        <div>
        <div className="container">
        <div className="col-9" id="back">
        BACKED  BY  THE  BEST
        </div>
        <div className="row">
        <div className="col-4" id="co">
        <img src={seq} width="170" height="30"/>
        </div>
        <div className="col-4" id="co">
        <img src={poly}  width="170" height="105"/>
        </div>
        <div className="col-4" id="co">
        <img src={cons}  width="220" height="80"/>
        </div>
        </div>
        </div>
        <Hoard/>
        </div>
    );
};
