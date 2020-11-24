import React, { Component } from 'react';
import PostComponent from './PostComponent';
import AddPostComponent from './AddPostComponent'
import {BrowserRouter, Route} from 'react-router-dom'
import HomeComponent from './HomeComponent'
import AboutComponent from './AboutComponent'

function App() {
  return(
    <BrowserRouter>
      <div>
        <Route exact path="/" component={HomeComponent} />
        <Route path='/about' component={AboutComponent} />
      </div>
    </BrowserRouter>
  )
}

export default App;

// export default class App extends Component {
//   state = {
//     posts: [
//       {id: 1, title: 'POST TITLE ONE', desc: 'POST DESC ONE', status: 1, link: 'https://cdn.pixabay.com/photo/2020/04/21/19/30/rome-5074421_1280.jpg'},
//       {id: 2, title: 'POST TITLE TWO', desc: 'POST DESC TWO', status: 0, link: 'https://cdn.pixabay.com/photo/2015/05/31/15/30/vatican-792189_1280.jpg'},
//       {id: 3, title: 'POST TITLE THREE', desc: 'POST DESC THREE', status: 1, link: 'https://cdn.pixabay.com/photo/2016/11/02/10/51/rome-1791065_1280.jpg'}
//     ]
//   }

//   addPost = (post) => {
//     post.id = Math.random()
//     let posts = [...this.state.posts, post]

//     this.setState({
//       posts: posts
//     })
//   }

//   render() {
//     console.log('render')

//     return (
//       <div>
//         <h1 className="center">Photos</h1><hr/>
//         <PostComponent posts={this.state.posts}/>
//         <AddPostComponent addPost={this.addPost}/>
//       </div>
//     )
//   }
// }