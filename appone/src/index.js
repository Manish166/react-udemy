import React from 'react'
import ReactDom from 'react-dom'

const App = () => {
    return(
        <div className="ui container comments">hello i am first line</div>
    )
}

ReactDom.render(<App/>, document.querySelector('#root'))