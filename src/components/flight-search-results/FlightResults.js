import {React} from 'react';
import { connect } from 'react-redux';
import Flightcard from './flightCard';

function FlightResults(props){
    console.log(props.flightsResult, "flightData in comp");

    const item = props.flightsResult.map(item => (
        <Flightcard data={item}></Flightcard>
    ))
    return(
        <div>
             {item && <div>{item}</div>}
            {!item && <div>No Results</div>}
        </div>
    
    )
}

const mapStateToProps = state => {
    console.log(state, "state")
    return {
        flightsResult: state.flightsData.flights
    }
}


export default connect(mapStateToProps)(FlightResults);