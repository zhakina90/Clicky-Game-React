import React from "react";
// import Images from "../IMGContainer/index";
import Data from "../../data.json";
import "./style.css";

class Game extends React.Component {
    state = {
        message: "Click any image to begin",
        score: 0,
        topScore: 0,
        data: [],
        dataJson: []
    };

    findId = (id) => {

        let find = 0;



        for (let i = 0; i < this.state.data.length; i++) {

            if (this.state.data[i] === id) {


                if (this.state.score > this.state.topScore) {
                    this.setState({
                        topScore: this.state.score
                    })
                };
                this.setState({
                    score: 0,
                    data: [],
                });
                find = find + 1;

            }
        };

        if (find === 0) {

            this.setState({
                score: this.state.score + 1
            },
                function () {
                    this.state.data.push(id);

                }
            );
        }
    };

    handleClickEvent = (id) => {
        this.findId(id);
    };

    componentWillMount = () => {
        const dataJson = this.state.dataJson;
        Data.map((image) => {
            dataJson.push({
                id: image.id,
                image: image.image
            });

        });
    };

    shouldComponentUpdate = () => {
        this.randomImages();
        this.scores();
        return true;
    };

    randomImages = () => {
        const dataJson = this.state.dataJson;
        console.log(dataJson);
        dataJson.sort(function (a, b) {
            return 0.5 - Math.random();
        });
    };

    scores = () => {
        const score = this.state.score;
        const topScore = this.state.topScore;
    };

    render() {
        return (
            <div className="Images">
                <p>
                    Score: {this.state.score}
                    topScore: {this.state.topScore}
                </p>
                {this.state.dataJson.map((data) => (
                    <div className='images-img' id={data.id} key={data.id}>

                        <img
                            className="images"
                            onClick={() => this.handleClickEvent(data.id)}
                            id={data.id}
                            key={data.id}
                            src={data.image}

                        // alt=""
                        />
                    </div>

                ))}

            </div>
        )

    }
}

export default Game;