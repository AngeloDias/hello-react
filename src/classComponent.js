import React, { Component } from 'react'

export default class classComponent extends Component {
    state = {
        title: 'Post title',
        desc: 'Post description',
        tag: 'Post tag'
    }

    likeFunction = (event) => {
        console.log(event.target)
        
        this.setState({
            title: 'Approved post',
            desc: 'Approved desc'
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.state.desc}</p>
                <button onClick={this.likeFunction}>Like</button>
            </div>
        )
    }
}