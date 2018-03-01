import React, { Component } from 'react'
import Splash from "./Splash"
import Cocktail from "./Cocktail"

class App extends Component {
    constructor() {
        super()
        this.splashOff = this.splashOff.bind(this)
        this.state = {
            splashOn: true
        }
    }
    splashOff() {
        this.setState({
            splashOn: false
        })
    }

    render() {
        return (
            <div>
                {this.state.splashOn ? <Splash splashOff={this.splashOff}/> : <Cocktail />}
            </div>
        )
    }
}

export default App
