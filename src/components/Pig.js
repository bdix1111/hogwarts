import React, { Component } from 'react';
import PigDetails from './PigDetails';

export default class Pig extends Component {

    state = {
        display: false
    }

    getImg = () => {
        let fileName = this.props.pig.name.split(" ").join("_").toLowerCase();
        return fileName;
    }

    handleClick = () => {
        this.setState({ display : !this.state.display })
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <h1>{this.props.pig.name}</h1>
                <img src={`/hog-imgs/${this.getImg()}.jpg`}/>
                {this.state.display && <PigDetails pig={this.props.pig} />}
            </div>
        )
    }
}
