import React, { Component } from 'react'

class Recipe extends Component {
    render() {
        return (
            <div id="recipe">
                <h3>{this.props.details.name}=></h3>
                <h4>Glassware</h4>
                <p>{this.props.details.glass}</p>
                <h4>Type</h4>
                <p>{this.props.details.category}</p>
                <h4>Ingredients</h4>
                <ul id="ingredients-list">
                    {this.props.details.ingredients.map((ingredient, i) => {
                        if(ingredient.special) {
                            return <li key={i}>{ingredient.special}</li>
                        }
                        else {
                            return <li key={i}>{ingredient.amount} {ingredient.unit} of {ingredient.ingredient}</li>
                        }
                    })}
                </ul>
                <h4>Preparation</h4>
                <p>{this.props.details.preparation}</p>
                <h4>Garnish</h4>
                <p>{this.props.details.garnish}</p>
            </div>
        )
    }
}

export default Recipe