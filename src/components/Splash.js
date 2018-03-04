import React, { Component } from 'react'
import Footer from "./Footer"
import Header from "./Header"

class Splash extends Component {
    render() {
        return (
            <div id="splash-body">
                <header id="splash-header">
                    <Header />
                </header>
                <div id="splash">
                    <img src="/assets/cocktail-logo.png" alt="cocktail-logo" className="splash-logo" id="cocktail-logo"/>
                    <p>
                        This app is designed to quickly find a cocktail based off an input of name, ingredient, or random.
                        It pulls information from an open source cocktail database and connects it to an International Bartender Association(IBA) recipe database.
                        It is important to note that many of the cocktail results will not have an associated IBA recipe. Some of the searched cocktails are non-alcoholic,
                        and others are not recognized as IBA official cocktails. A future addition to this app will be a form submission for a cocktail without a recipe.
                        Otherwise, this app is best used to expand one's cocktail knowledge or to easily explore the vast world of libations.
                        Cheers!
                    </p>
                    <button onClick={(e) => {this.props.splashOff(e)}}><strong>Go</strong></button>
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default Splash
