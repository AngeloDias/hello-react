import React, { Component } from 'react';
import ClassComponent from './classComponent';

export default class App extends Component {
  state = {
    posts: [
      {title: 'POST TITLE ONE', desc: 'POST DESC ONE'},
      {title: 'POST TITLE TWO', desc: 'POST DESC TWO'},
      {title: 'POST TITLE THREE', desc: 'POST DESC THREE'}
    ]
  }

  render() {
    return (
      <div>
        <ClassComponent posts={this.state.posts}/>
      </div>
    )
  }
}