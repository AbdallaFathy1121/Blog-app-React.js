import React from 'react'
import {Jumbotron, Button} from 'react-bootstrap'
import Header from "../components/layout/header"
import Footer from "../components/layout/footer"
import Head from "../components/blog/head"

const Home = () => {
    return (
        <div>
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        </div>
    )
}

export default Home
