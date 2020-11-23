import React, { Component } from 'react'

export default class classComponent extends Component {

    render() {
        const {title, desc} = this.props

        return(
            <div>
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
        )
    }
    
}