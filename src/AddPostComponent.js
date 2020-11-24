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
        this.props.addPost(this.state);
    }

    render() {
        return(
            <div className="row">
                <form onSubmit={this.handleSubmit} className="col s12">
                    <div>

                        <div className="input-field col s6">
                            <label htmlFor="name">Post Title</label>
                            <input type="text" id="title" className="validate" onChange={this.handleChange} />
                        </div>

                        <div className="input-field col s6">
                            <label htmlFor="name">Post Description</label>
                            <input type="text" id="desc" onChange={this.handleChange} />
                        </div>

                        <div className="input-field col s6">
                            <label htmlFor="name">Image Link</label>
                            <input type="text" id="link" onChange={this.handleChange} />
                        </div>

                        <button className="btn waves-effect waves-light">Submit</button>

                    </div>
                </form>
            </div>
        )
    }

}