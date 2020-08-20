import React from 'react'
import "./Hoard.css"
import Last from './Last'

export default function Hoard() {
    return (
        <div>
        <div className="container">
        <div className="row">
        <div className="col-8">
        <p variant="primary" id="text-1">
        Start saving for a rainy day fund
        </p>
        <p className="secondary" id="text-2">
        Use Our Checking Account to Achieve Your Financial Goals
        </p>
        <p className="secondary" id="text-3">
        With the latest Federal rate cut, the largest banks are offering close to 0% APY on their checking and savings accounts. OnJuno checking will earn you more than 20x the national average*. Deposits up to $250,000 are FDIC insured through our partner bank. Grow your idle money faster with our checking account and start saving towards a rainy day fund, big expense, or vacation.
        </p>
        </div>
        <div className="col-4" id="num">
        2.15<sup>%</sup>
        
        <div className="row" id="below">Bonus Rates on Deposites </div>
        </div>
        </div> 
        </div>
        <Last/>
        </div>
    )
}
