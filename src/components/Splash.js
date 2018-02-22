import React, { Component } from 'react'

class Splash extends Component {
    render() {
        return (
            <div id="splash">
                <h1>Cocktail=></h1>
                <img src="/assets/cocktail-logo.png" alt="cocktail-logo" id="cocktail-logo"/>
                <p>This app is designed to quickly find a cocktail based off an input of name, ingredient, or just choose randomly.
                    It pulls information from an open source cocktail database and connects it to a local recipe database.
                    The recipe database is constantly being updated so many of the cocktail recipes will not be available.
                    This app is best used to expand one's cocktail knowledge or to easily explore the vast world of libations.
                    Cheers!
                </p>
                <button onClick={(e) => {this.props.splashOff(e)}}><strong>Go</strong></button>
            </div>
        )
    }
}

export default Splash
