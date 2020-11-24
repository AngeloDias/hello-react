import React, { Component } from 'react'

export default class classComponent extends Component {

    render() {
        const {posts} = this.props
        const postLists = posts.map(post => {
            return (
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.desc}</p>
                </div>
            )
        })

        return(
            <div>
                {postLists}
            </div>
        )
    }
    
}