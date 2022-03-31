import React, {Component} from "react";
import {BrowserRouter} from "react-router-dom"
import Blog from "./views/blog"

class App extends Component {
  render () {
    return (
      <>
        <BrowserRouter>
          <Blog />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
