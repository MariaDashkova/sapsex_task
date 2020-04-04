import React from 'react';
import './stylesheets/App.css';
import VehicleList from './components/VehicleList'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        arrDate :[]}
    }
    componentWillMount() {
        console.log("there");
        fetch('https://raw.githubusercontent.com/denissokolov/tc-internship-task/master/launches.json')
            .then(response => response.json())
            .then(data => {
                this.setState({arrDate: data})
            })
            .catch(error => console.log('error', error));
    }
    render() {

        return (
            <div className="container-fluid">
                <div>
                    <h2>Welcome to SpaceX Transportation</h2>
                    <p>Have a nice day)</p>
                </div>
                <VehicleList header="Missions" vehicles={this.state.arrDate}/>

            </div>
        )
    }
}

export default App;
