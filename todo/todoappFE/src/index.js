import React from 'react'
import ReactDOM, { render } from 'react-dom'
import Home from "./pages/homepage";
import './app.css'

const App = ()=> {
    return (
        <div>
            <Home/>
        </div>
        
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'))