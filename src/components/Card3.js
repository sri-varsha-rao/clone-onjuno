import React from 'react';
import {Card,Button,ProgressBar,ListGroup,ListGroupItem} from "react-bootstrap";
import pic3 from "../images_1/juno-basic@3x.png"
import "./Card2-3.css";



export default function Card3() {
    return (
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pic3} />
        <Card.Body>
            <Card.Title id="card-title">BASIC</Card.Title>
            <div className="container">
            <div className="row" id="text-num">
            1.15%<sup id="super" style={{color:"gray"}}>3</sup>
            </div>
            <div className="row" id="cashback">
            <Button variant="secondary" size="sm">
            3%
            </Button>{' '}
            <p style={{paddingLeft:5}}>cash back</p>
            </div>
            <div className="row" id="spots">
            <div className="col-6">
            10000 spots
            </div>
            <div className="col-6">
            10K spots left
            </div>
            </div>
            <div style={{paddingTop:15,paddingBottom:15}}>
            <ProgressBar variant="secondary" now={0} />
            </div>
            <Button variant="secondary disabled" style={{width:"100%"}} size="lg">
            Coming Soon
            </Button>{' '}
            <div ID="list">
            <Card.Header>
            <span id="include">INCLUDES</span>
            </Card.Header>
            <ListGroup variant="flush">
            <ListGroup.Item>Free Debit Card</ListGroup.Item>
            <ListGroup.Item>1.15% Bonus Rate Checking Account</ListGroup.Item>
            <ListGroup.Item>3% Cash back on brands you love</ListGroup.Item>
            <ListGroup.Item>Free Cash Withdrawals</ListGroup.Item>
            <ListGroup.Item>Phone & Chat Support</ListGroup.Item>
            </ListGroup>
            </div>
            </div>
            <Card.Text id="card-text">
            <ListGroup>
            <ListGroupItem>
            Fund your account with a minimum opening deposit of $0.
            </ListGroupItem>
            </ListGroup>
            </Card.Text>
            <ListGroup>
            <ListGroup.Item variant="dark">
            <div><h5>No Membership Fee</h5></div>
            <div>
            <h3>Free Forever</h3>
            </div>
            
            </ListGroup.Item>
            </ListGroup>
        </Card.Body>
        </Card>
        </div>
    )
}
