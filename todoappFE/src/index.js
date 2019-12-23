import React from 'react'
import ReactDOM, { render } from 'react-dom'
class App extends React.Component {
    render() {
        return (
            <p> React in here</p >
        );
    }
};

ReactDOM.render(<App/>, document.querySelector('#root'))