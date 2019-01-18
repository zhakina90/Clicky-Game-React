import React from "react";


const Images = (props) => {

    return (
        <div>
            <nav className="nav">
                <ul>
                    <li>CLick Game</li>
                    <li> CLick on Image to begin</li>

                    <li className="score" >{props.clickcount}</li>
                    <li className="topScore" ></li>
                </ul>
            </nav>
            <header className="App-header">
                <h1>Clicky Game!</h1>
                <h2>Click on an image to earn points, but don't click on any more than once!</h2>
            </header>
            <div className="card">
                <div className="img-container">
                    <img className="clickable-image" alt="" onClick={props.handleIncre} ></img>
                </div>
            </div>
        </div>
    )
}
export default Images;