import * as React from "react";
import '../stylesheets/countdown.css'

const TIME_PARSE_DATE = 1000 * 60 * 60 * 24;
const TIME_PARSE_HOURS = 1000 * 60 * 60;

class CountDown extends React.Component {

    constructor(props) {
        super(props);
        this.count = this.count.bind(this);
        this.state = {
            days: 0,
            minutes: 0,
            hours: 0,
            seconds: 0,
            time_up: ""
        };
        this.x = null;
        this.deadline = props.date;
    }

    count() {
        let now = new Date().getTime();
        let t = this.deadline - now;
        let days = Math.floor(t / TIME_PARSE_DATE);
        let hours = Math.floor((t % TIME_PARSE_DATE) / TIME_PARSE_HOURS);
        let minutes = Math.floor((t % TIME_PARSE_HOURS) / (1000 * 60));
        let seconds = Math.floor((t % (1000 * 60)) / 1000);
        this.setState({days, minutes, hours, seconds});
        if (t < 0) {
            clearInterval(this.x);
            this.setState({
                days: 0,
                minutes: 0,
                hours: 0,
                seconds: 0,
                time_up: new Date().setTime((now - this.deadline) / TIME_PARSE_DATE)
            })
        }
    }

    componentDidMount() {
        this.x = setInterval(this.count, 1000);
    }

    render() {

        const {days, seconds, hours, minutes, time_up} = this.state;
        return (
            <div>
                {
                    this.state.time_up === ""
                        ? (<div id="clockdiv">
                                <div className="intoClock">
                                    <span>{days}</span>
                                    <div> Days</div>
                                </div>
                                <div className="intoClock">
                                    <span>{hours}</span>
                                    <div> Hours</div>
                                </div>
                                <div className="intoClock">
                                    <span>{minutes}</span>
                                    <div> Minutes</div>
                                </div>
                                <div className="intoClock">
                                    <span>{seconds}</span>
                                    <div> Seconds</div>
                                </div>
                            </div>
                        )
                        : (
                            <p id="demo">{time_up} day(s) left</p>
                        )
                }


            </div>
        )
    }


}

export default CountDown