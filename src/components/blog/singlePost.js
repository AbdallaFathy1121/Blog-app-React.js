import React, { Component } from 'react'
import {Modal, Button} from 'react-bootstrap'
import axios from "axios"

export class SinglePost extends Component {

    state = {
        post: null,
    };

    componentDidUpdate(prevProps) {
        if (this.props.id && this.props.id !== prevProps.id) {
            axios.get("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
            .then((res) => {
                this.setState({post: res.data});
            })
        }
    }

    renderPost = () => {
        if(this.state.post) {
            return (<Modal
                show={this.props.showModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={this.props.closeModalHandler}
                animation={false}
                >
                <Modal.Header closeButton >
                    <Modal.Title id="contained-modal-title-vcenter">
                    {this.state.post.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                    {this.state.post.body}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.closeModalHandler}>Close</Button>
                </Modal.Footer>
            </Modal>)
        }
    }

    render() {
        return (
            <>
                {this.renderPost()}
            </>
        )
    }
}

export default SinglePost
