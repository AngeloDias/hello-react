import React, { Component } from 'react';
import ClassComponent from './classComponent';

export default class App extends Component {
  state = {
    posts: [
      {title: 'POST TITLE ONE', desc: 'POST DESC ONE', status: 1},
      {title: 'POST TITLE TWO', desc: 'POST DESC TWO', status: 0},
      {title: 'POST TITLE THREE', desc: 'POST DESC THREE', status: 1}
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