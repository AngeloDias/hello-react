import React, { Component } from 'react'

export default class PostComponent extends Component {

    render() {
        const {posts} = this.props
        const postLists = posts.map(post => {
            return(
                post.status === 1 ? (
                    <div className="col s12 m6 16" key={post.id}>
                        <div className="card">
                            <div className="card-image">
                                <img src={post.link} alt="card" />
                                <span className="card-title">{post.title}</span>
                            </div>
                            <div className="card-content">
                                <p>{post.desc}</p>
                            </div>
                        </div>
                    </div>
                ) : null
            )
        })

        return(
            <div className="row">
                {postLists}
            </div>
        )
    }
    
}