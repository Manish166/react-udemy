import React from 'react'
import ReactDom from 'react-dom'
import CommentDetail from './component/CommentDetail'
import faker from 'faker'

const App = () => {
    return(
        <div className="ui container comments">
            <CommentDetail author={faker.name.firstName()} avatar={faker.image.avatar()}/>
            <CommentDetail author={faker.name.firstName()} avatar={faker.image.avatar()}/>
            <CommentDetail author={faker.name.firstName()} avatar={faker.image.avatar()}/>
            <CommentDetail author={faker.name.firstName()} avatar={faker.image.avatar()}/>
            <CommentDetail author={faker.name.firstName()} avatar={faker.image.avatar()}/>
        </div>      
    )
}
ReactDom.render(<App/>, document.querySelector('#root'))