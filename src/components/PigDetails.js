import React, { Component } from 'react'

export default class PigDetails extends Component {
    render() {

        const { weight, specialty, greased, 'highest medal achieved': hmr} = this.props.pig
    
        return (
            <div>
                <p>Weight: {weight}</p>
                <p>Specialty: {specialty}</p>
                <p>Greased: {greased ? "Yes" : "No"}</p>
                <p>Highest Medal Awarded: {hmr}</p>
            </div>
        )
    }
}
