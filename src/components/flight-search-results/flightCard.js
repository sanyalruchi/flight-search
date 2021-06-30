import React from 'react';
import Container from 'react-bootstrap/Container';
import { Button, Col } from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import './flights-card.css'

function Flightcard(props){
    let {id, airline_name, flight_number,fromCity, toCity,price,noofstops, duration,logo } = props.data;
    return(
        <Container>
            <Card body key={id} className="align-items-center justify-content-md-center card-body">
                <Card.Img variant="top" src={logo} className="logo"/>
            </Card>
           <Card body key={id} className="align-items-center justify-content-md-center card-body">
               <Card.Title className="card-title">{airline_name}</Card.Title>
                <Card.Text>{flight_number}</Card.Text>
            </Card>
           
           <Card body key={id} className="align-items-center justify-content-md-center card-body">
               <Card.Title  className="card-title">{fromCity}</Card.Title>
               <Card.Text>From</Card.Text>
           </Card>
           <Card body key={id} className="align-items-center justify-content-md-center card-body">
               <Card.Title  className="card-title">{toCity}</Card.Title>
               <Card.Text>To</Card.Text>
           </Card>
           <Card body key={id} className="align-items-center justify-content-md-center card-body">
               <Card.Title  className="card-title">{duration} Hr.</Card.Title>
               <Card.Text>{noofstops} Stops</Card.Text>
           </Card>
           <Card body key={id} className="align-items-center justify-content-md-center card-body">
               <Card.Title  className="card-title">{price}Rs.</Card.Title>
           </Card>
           <Card body key={id} className="align-items-center justify-content-md-center card-body">
               <Button>Book Now</Button>
           </Card>
        </Container>
    )
}

export default Flightcard;