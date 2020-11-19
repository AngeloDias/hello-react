import React, { Component } from 'react'

export default class classComponent extends Component {
    state = {
        name: 'Ângelo',
        id: '3127',
        class: '10'
    }

    render() {
        return(
            <div>
                <h1>Student name: {this.state.name}, student ID: {this.state.id}, student class: {this.state.class}</h1>
            </div>
        )
    }
}
