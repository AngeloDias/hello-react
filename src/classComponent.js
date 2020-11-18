import React, { Component } from 'react'
import Test from './testComponent';

export default class classComponent extends Component {
    render() {
        return(
            <div>
                <h1>I am class Component</h1>
                <Test />
            </div>
        )
    }
}
