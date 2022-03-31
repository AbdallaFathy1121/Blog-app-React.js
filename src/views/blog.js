import React from 'react'
import {Route} from "react-router-dom"
import Header from "../components/layout/header"
import Footer from "../components/layout/footer"
import Head from "../components/blog/head"
import Posts from "../components/blog/posts"
import Home from "./home"

const Blog = () => {
    return (
        <div>
            <Header />
            <Head />

            <Route path="/" exact component={Home} />
            <Route path="/blog" component={Posts} />

            <Footer />
        </div>
    )
}

export default Blog
