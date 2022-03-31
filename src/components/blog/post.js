import React from 'react'
import {Card, Button} from "react-bootstrap"
import defaultImg from "../../assets/images/default.jpg"

const Post = (props) => {
    return (
        <div>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={defaultImg} />
                <Card.Body>
                    <Card.Title>{props.post.title}</Card.Title>
                    <Card.Text>
                        {props.post.body}
                    </Card.Text>
                    <Button onClick={() => props.openModal(props.post.id)} variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Post
