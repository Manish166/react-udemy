import React from 'react'
import ReactDOM, { render } from 'react-dom'
import QuoteBox from "../component/quote/quote";
import TodoList from '../component/todolist/todolist'
import InProgressList from '../component/inprogresslist/inprogresslist'
import CompleteList from '../component/completeList/completelist'


class Home extends React.Component {
    render (){
        return (
            <React.Fragment>
                <QuoteBox/>
                <TodoList/>
                <InProgressList/>
                <CompleteList/>
            </React.Fragment>
        )   
    }
}
        
export default Home