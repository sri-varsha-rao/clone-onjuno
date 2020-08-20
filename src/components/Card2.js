import React from 'react';
import {Card,Button,ProgressBar,ListGroupItem,ListGroup} from "react-bootstrap";
import pic2 from "../images_1/juno-plus@3x.png"
import "./Card1.css";




export default function Card2() {
    return (
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pic2} />
        <Card.Body>
            <Card.Title id="card-title">PREMIUM</Card.Title>
            <div className="container">
            <div className="row" id="text-num">
            1.65%<sup id="super" style={{color:"gray"}}>2</sup>
            </div>
            
            <div className="row" id="cashback">
            <Button variant="secondary" size="sm">
            4%
            </Button>{' '}
            <p style={{paddingLeft:5}}>cash back</p>
            </div>
            <div className="row" id="spots">
            <div className="col-6">
            2000 spots
            </div>
            <div className="col-6">
            2K spots left
            </div>
            </div>
            <div style={{paddingTop:15,paddingBottom:15}}>
            <ProgressBar variant="success" now={0} />
            </div>
            <Button variant="secondary disabled" style={{width:"100%"}} size="lg">
            Up Next
            </Button>{' '}
            <div ID="list">
            <Card.Header>
            <span id="include">INCLUDES</span>
            </Card.Header>
            <ListGroup variant="flush">
            <ListGroup.Item>Free Debit Card</ListGroup.Item>
            <ListGroup.Item>1.65% Bonus Rate Checking Account</ListGroup.Item>
            <ListGroup.Item>4% Cash back on brands you love</ListGroup.Item>
            <ListGroup.Item>Free Cash Withdrawals</ListGroup.Item>
            <ListGroup.Item>Phone & Chat Support</ListGroup.Item>
            </ListGroup>
            </div>
            </div>
            <Card.Text id="card-text">
            <ListGroup>
            <ListGroupItem>
            Fund your account with a minimum opening deposit of $500.
             2 additional free ATM withdrawals per month from out of network ATMs.
             </ListGroupItem>
             </ListGroup>
             </Card.Text>
            <ListGroup>
            <ListGroup.Item variant="dark">
            <div style={{textDecoration:"line-through",color:"black"}}>$6.99/m Membership Fee</div>
            <div>
            <h3>Coming Soon</h3>
            </div>
            </ListGroup.Item>
            </ListGroup>
        </Card.Body>
        </Card>
        </div>
    )
}
