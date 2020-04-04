import TimerComponent from "./CountDown";
import React from "react";

function VehicleHeaders() {
    return (
        <tr>
            <th>Mission</th>
            <th>Vehicle</th>
            <th>Location</th>
            <th>Start Date</th>
            <th>Timer</th>
        </tr>
    )
}

function VehicleRows(props) {
    return (
        <tr>
            <td>{props.mission}</td>
            <td>{props.model}</td>
            <td>{props.location}</td>
            <td>{dateParser(props.date)} </td>
            {
                notNullDateFormat(props.date).length === 0 ? (<tb><TimerComponent
                    date={new Date(props.date.years, props.date.months, props.date.date, props.date.hours, props.date.minutes, 0, 0).getTime()}/>
                </tb>) : (<td>not enough info</td>)
            }
        </tr>
    )
}

function notNullDateFormat(param) {
    let arr = [];
    for (let key in param) {
        if (param[key] === null)
            arr.push(key);
    }
    return arr;
}

function dateParser(props) {
    let arr = notNullDateFormat(props);
    let res = '';
    if (!(arr.includes('years'))) res += props.years;
    if (!(arr.includes('months'))) res += " " + new Date(props.years, props.months).toLocaleString('en', {month: 'long'});
    if (!(arr.includes('date'))) res += " " + props.date;
    return (<p>{res}</p>)
}

function VehicleList(props) {
    return (
        <div>
            <h2>{props.header}</h2>
            <table className="table table-striped">
                <tbody>
                <VehicleHeaders/>
                {props.vehicles.map(vehicle => {
                        console.log("in map");
                        return (
                            <VehicleRows mission={vehicle.mission} model={vehicle.vehicle} location={vehicle.location}
                                         date={vehicle.launch}/>
                        );

                    }
                )}
                </tbody>
            </table>
        </div>
    )
}

export default VehicleList;