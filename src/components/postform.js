import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestNewPost } from '../actions/postFormAction';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
       this.setState({ [e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
      e.preventDefault();
      const post = {
          title: this.state.title,
          body: this.state.body
      }
      this.props.requestNewPost(post);
      /*
      fetch('https://jsonplaceholder.typicode.com/posts', 
         { 
             method: 'POST',
             headers: {
                'content-type': 'application/json'
             },
             body: JSON.stringify(post)
         }
      )
      .then(res => res.json())
      .then(data => console.log(data));
      */
    }


    render() {
        return (
        <div>
            <h3>Add Post Item</h3>
            <form className="form-control" onSubmit={this.onSubmit}>
                <div>
                    <label>Title:</label>
                    <br />
                    <input type="text" className="input" name="title" onChange = {this.onChange} value={this.state.title} />
                </div>
                <br />
                <div>
                <label>Body:</label>
                    <br />
                    <textarea className="input" name="body" onChange={this.onChange} value={this.state.body} />
                </div>
                <br />
                <button className="btn" type="submit">Submit</button>
            </form>
        </div>
        );
    }
}

PostForm.propTypes = {
    requestNewPost: PropTypes.func.isRequired
}


export default connect(null, {requestNewPost})(PostForm);