import React, { Component } from 'react'
import Splash from "./Splash"
import Cocktail from "./Cocktail"
import MetaTags from "react-meta-tags"

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
                <MetaTags>
                    <title>Cocktail=></title>
                    <meta name="description" content="A Cocktail App" />
                    <meta name="og:title" content="Cocktail=>" />
                    <meta name="og:image" content="https://cocktail.surge.sh/assets/cocktail-logo.png" />
                </MetaTags>
                {this.state.splashOn ? <Splash splashOff={this.splashOff}/> : <Cocktail />}
            </div>
        )
    }
}

export default App