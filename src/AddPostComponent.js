import React, {Component} from 'react'

export default class AddPostComponent extends Component {
    state = {
        title: null,
        desc: null,
        link: null
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Post Title</label>
                    <input type="text" id="title" onChange={this.handleChange} />

                    <label htmlFor="name">Post Description</label>
                    <input type="text" id="desc" onChange={this.handleChange} />

                    <label htmlFor="name">Image Link</label>
                    <input type="text" id="link" onChange={this.handleChange} />

                    <button>Submit</button>
                </form>
            </div>
        )
    }

}