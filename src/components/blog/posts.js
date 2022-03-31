import React, { Component } from 'react'
import Post from "./post"
import axios from "axios"
import {Spinner} from "react-bootstrap"
import SinglePost from './singlePost'

export class Posts extends Component {

    state = {
        posts: [],
        showModal: false,
        currentId: null,
    };

    componentDidMount () {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            this.setState({posts: res.data});
        })
    }

    renderPosts = () => {
        if (this.state.posts.length > 0) {
            return (this.state.posts.map((post) => {
                return (
                    <div key={post.id} className="col-lg-4 col-md-6 col-12 mb-3">
                        <Post post={post} openModal={this.openModal}/>
                    </div>
                );
            }))
        } else {
            return (
                <div className='col-12 text-center'>
                    <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            )
        }
    }

    openModal = (id) => {
        this.showModalHandler();
        this.setState({currentId: id});
    }

    closeModalHandler = () => {
        this.setState({showModal: false});
    }

    showModalHandler = () => {
        this.setState({showModal: true});
    }

    render() {
        return (
            <div className="container">
                <h2 className="mb-4 mt-5 h3 text-primary border-bottom pb-3">Latest Posts</h2>
                <div className="row">
                    {this.renderPosts()}
                </div>
                <SinglePost 
                    showModal={this.state.showModal} 
                    closeModalHandler={this.closeModalHandler}
                    id={this.state.currentId}    
                />
            </div>
        )
    }
}

export default Posts
