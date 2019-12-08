import React from 'react'
import ReactDom from 'react-dom'
import faker from 'faker'
import ApprovalCard from './component/ApprovalCard'
import CommentDetail from './component/CommentDetail'

const App = () => {
    return(
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author={faker.name.firstName()} avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={faker.name.firstName()} avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={faker.name.firstName()} avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author={faker.name.firstName()} avatar={faker.image.avatar()}/>
            </ApprovalCard>

        </div>      
    )
}
ReactDom.render(<App/>, document.querySelector('#root'))