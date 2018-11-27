import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestPostData } from '../actions/postAction';


class Posts extends Component {
    componentDidMount() {
        this.props.requestPostData();
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost) {
            nextProps.newPost.id = this.props.posts.length + 1;
            this.props.posts.unshift(nextProps.newPost)
        }
    }
    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <span>{post.id + '. '}</span>
                <span>{post.title}</span>
            </div>
        )); 
        return (
            <div>
            <h3>Post List</h3>
            {postItems}
            </div>            
        );
    }
};

Posts.propTypes = {
   requestPostData: PropTypes.func.isRequired,
   posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
   posts: state.post.items,
   newPost: state.post.item
});

//state.post  post is from rootReducer

export default connect(mapStateToProps, {requestPostData})(Posts);