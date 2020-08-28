import React from 'react';
import Counter from './CounterWithPropsWithCallback'

class Score extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            home: 0,
            away: 0
        }

    }
    handleHomeScore = (value) => {
        this.setState({
            home: this.state.home + value
        })
    }

    handleAwayScore = (value) => {
        this.setState({
            away: this.state.away + value
        });
    }

    submitResult = (e) =>{
        console.log(this.state)
    }

    render(){
        return (
            <div className="container">
                <div className="d-flex">
                    <div className={"row w-100 align-items-center text-center"}>
                        <div className="col-4">
                            <Counter label="home" score={this.state.home} handleScoreIncrease={this.handleHomeScore}/>
                        </div>
                        <div className="col-2">
                            <h1>:</h1>
                        </div>
                        <div className="col-4">
                            <Counter label="away" score={this.state.away} handleScoreIncrease={this.handleAwayScore}/>
                        </div>
                    </div>
                </div>
                <div className={"row mt-4"}>
                    <div className="col offset-4">
                        <button type="button" className={"btn btn-info"}  onClick={this.submitResult}>Submit Result</button>
                    </div>
                </div>
            </div>
        )
    }
}




export default Score;