import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props){
        super(props);
            this.state={
                lat : null,
                errMessage : '',
            };
        window.navigator.geolocation.getCurrentPosition(
            position=>{
                this.setState({lat:position.coords.latitude})
            },
            err=>{
                this.setState({errMessage:this.state.errMessage})
                }
        )
    }
    render(){
        if (!this.state.lat && this.state.errMessage){
            return <div>Error Message : {this.state.errMessage}</div>
    }
}
}

ReactDOM.render(<App/>, document.querySelector('#root'))