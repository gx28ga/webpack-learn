"use strict";
import React from "react";
import ReactDOM from "react-dom";
import "./search.less"
import image from "./images/image.jpg"
class Search extends React.Component{
    render() {
        return (
            <>
                <div className="search-text">search text</div>
                <img src={image} />
            </>
        )
    }
}

ReactDOM.render(<Search />, document.querySelector("#root"));
