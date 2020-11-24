import React, { Component } from 'react'

export default class classComponent extends Component {

    render() {
        const {posts} = this.props
        // const postLists = posts.map(post => {
        //     if(post.status == 1) {
        //         return (
        //             <div>
        //                 <h1>{post.title}</h1>
        //                 <p>{post.desc}</p>
        //             </div>
        //         )
        //     } else {
        //         return null;
        //     }
            
        // })

        const postLists = posts.map(post => {
            return(
                post.status == 1 ? (
                    <div>
                        <h1>{post.title}</h1>
                        <p>{post.desc}</p>
                    </div>
                ) : null
            )
        })

        return(
            <div>
                {postLists}
            </div>
        )
    }
    
}