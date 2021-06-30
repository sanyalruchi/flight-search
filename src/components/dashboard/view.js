import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import './view.css';
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux"

import {setFlightData} from '..//..//action/actions';
import { flightData } from '../../data/flight_result';


function DashboardView(props) {
    const [origin, setOrigin] = useState("Uppsala");
    const [destination, setDestination] = useState("Неготино")
    const [startDate, setStartDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState();
    let history = useHistory();

    const handleChange = (e) => {
        setOrigin(e.target.value)
    }

    const handleDesChange = (e) => {
        setDestination(e.target.value)
    }

    const seacrhFlights = (origin, destination, traveldate) => {
        let res = flightData.filter(flight => flight.fromCity === origin && flight.toCity === destination);
        props.setFlightData(res);
    }

    const handleSubmit = () => {
        let newdate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(startDate);
        seacrhFlights(origin,destination,newdate);
        history.push("/flights-results");
    }

    const handleTravelDateChange = (e) => {
        setStartDate(e);
    }

    return (
        <Container>
        <Form className="flight-form" onSubmit={handleSubmit}>
        <Form.Group as={Row} className="justify-content-md-center" controlId="formHorizontalEmail">
            <Form.Label className="label-style" as={Col}  xs={3} >From</Form.Label>
            <Col xs={5}>
            <Form.Control type="text" placeholder="Source city" value={origin}  onChange={handleChange} required/>
            </Col>
        </Form.Group>
        
        
        <Form.Group as={Row} className="justify-content-md-center"controlId="flightDestination">
            <Form.Label className="label-style" as={Col}  xs={3} >To</Form.Label>
            <Col xs={5}>
            <Form.Control  type="text" placeholder="Destination city" value={destination}  onChange={handleDesChange} required/>
            </Col>
        </Form.Group>
        
        
        <Form.Group as={Row}  className="justify-content-md-center"controlId="returnDate">
            <Form.Label className="label-style" as={Col}  xs={3}>Travel Date</Form.Label>
            <Col xs={5}>
            <DatePicker  selected={startDate} onChange={handleTravelDateChange} minDate={new Date()} required/>
            </Col>
        </Form.Group>
        
        
        <Form.Group as={Row}  className="justify-content-md-center"controlId="returnDate">
            <Form.Label className="label-style" as={Col}  xs={3}>Return Date</Form.Label>
            <Col xs={5}>
            <DatePicker selected={returnDate} onChange={(date) => setReturnDate(date)} minDate={new Date()} />
            </Col>
            </Form.Group>
        
        <Form.Group as={Row}>
            <Col sm={{ span: 7, offset: 5 }}>
                <Button className="custom-btn" type="submit">Happy Easy Search</Button>
            </Col>
        </Form.Group>
        </Form>
        </Container>
    )
}

  const mapStateToProps = state => {
    return {
        flights: state.flights
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      setFlightData: (data) => dispatch(setFlightData(data)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView)