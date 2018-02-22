import React, { Component } from 'react'


class RecipeInfo extends Component {
    render() {
        return (
            <div className="recipe">
                <h2 className="recipe-header">IBA Recipe</h2>
                <h3>{this.props.details.name}=></h3>
                <h4>Glassware</h4>
                <p>{this.props.details.glass}</p>
                <h4>Type</h4>
                <p>{this.props.details.category}</p>
                <h4>Ingredients</h4>
                <ul>
                    {this.props.activate === true ? "" : this.props.details.ingredients.map((ingredient, i) => {
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

export default RecipeInfo
