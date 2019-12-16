import React from 'react'
import ReactDOM from 'react-dom'    
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
    constructor(props){
        super(props);
            this.state={
                lat : null,
                long: null,
                errMessage : '',
            };
    }
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position=>{this.setState({lat:position.coords.latitude,
                            long:position.coords.longitude})},
            err=>{this.setState({errMessage:this.state.errMessage})}
        )
    }

    render(){
        if (!this.state.lat && this.state.errMessage){
            return <div>Error Message : {this.state.errMessage}</div>
        }
        if (this.state.lat && !this.state.errMessage){
            return <SeasonDisplay lat={this.state.lat} long={this.state.long}/>
        }
        return(
            <div>Loading...</div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))