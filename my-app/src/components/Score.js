import React from "react";
import Images from "./Images";

class Score extends React.Component {
    state = {
        data: [],
        score: 0,
        topScore: 0
    };
    handleIncrement = () => {
        this.setState({ score: this.state.score + 1 });
    }

    render() {
        return (
            <div className="App">
                <Images clickcount={this.state.score} handleIncre={this.handleIncrement} />
            </div>
        );
    }



}
export default Score;