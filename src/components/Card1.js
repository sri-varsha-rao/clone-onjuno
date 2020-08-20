import React from 'react';
import {Card,Button,ProgressBar,ListGroup,ListGroupItem} from "react-bootstrap";
import pic1 from "../images_1/juno-black-card@3x.png";
import "./Card1.css";


export default function Card1() {
    return (
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pic1} />
        <Card.Body>
            <Card.Title id="card-title">METAL</Card.Title>
            <div className="container">
            <div className="row" id="text-num" style={{color:"blue"}}>
            2.15%<sup id="super" style={{color:"gray"}}>1</sup>
            </div>
            <div className="row" id="cashback">
            <Button variant="success" size="sm">
            5%
            </Button>{' '}
            <p style={{paddingLeft:5}}>cash back</p>
            </div>
            <div className="row" id="spots">
            <div className="col-6">
            <span className="success">2165</span>/2500
            </div>
            <div className="col-6">
            335 spots left
            </div>
            </div>
            <div style={{paddingTop:15,paddingBottom:15}}>
            <ProgressBar variant="success" now={86.6} />
            </div>
            <Button variant="primary" style={{width:"100%"}} size="lg">
            Sign Now
            </Button>{' '}
            <div ID="list">
            <Card.Header>
            <span id="include">INCLUDES</span>
            </Card.Header>
            <ListGroup variant="flush">
            <ListGroup.Item>Charcoal Black Metal Card</ListGroup.Item>
            <ListGroup.Item>2.15%3 Bonus Rate Checking Account</ListGroup.Item>
            <ListGroup.Item>5% Cash back on brands you love</ListGroup.Item>
            <ListGroup.Item>Free Cash Withdrawals</ListGroup.Item>
            <ListGroup.Item>Phone & Chat Support</ListGroup.Item>
            </ListGroup>
            </div>
            </div>
            <Card.Text id="card-text">
            <ListGroup>
            <ListGroupItem>
            Fund your account with a minimum opening deposit of $1000.
             3 additional free ATM withdrawals per month from out of network ATMs.
             </ListGroupItem>
             </ListGroup>
             </Card.Text>
            <ListGroup>
            <ListGroup.Item variant="success">
            <div style={{textDecoration:"line-through",color:"black"}}>$11.99/m Membership Fee</div>
            <div>
            <h3>Free for 6 months</h3>
            </div>
            <div><h5>$60 Savings</h5></div>
            </ListGroup.Item>
            </ListGroup>
        </Card.Body>
        </Card>
        </div>
    )
}
