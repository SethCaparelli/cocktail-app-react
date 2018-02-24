import React, { Component } from 'react'

class Drink extends Component {
    constructor() {
        super()
        this.createName = this.createName.bind(this)
    }

    createName(event) {
        const drinkName = this.props.details.strDrink
        this.props.getRecipe(drinkName)
    }

    render() {
        return (
            <div className="drink">
                <h3>{this.props.details.strDrink}=></h3>
                <img className="drink-img" src={"http://" + this.props.details.strDrinkThumb} alt="drink-pic"/>
                <button onClick={(e) => {this.createName(e)}}>Get Recipe</button>
            </div>
        )
    }
}

export default Drink
