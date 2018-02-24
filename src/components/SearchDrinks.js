import React, { Component } from 'react'

class SearchDrinks extends Component {
    createDrinkName(event) {
        event.preventDefault()
        const drinkByName = this.drinkByName.value
        this.props.getDrinksByName(drinkByName)
        this.drinkForm.reset()
    }

    createDrinkName2(event) {
        event.preventDefault()
        const drinkByIngredient = this.drinkByIngredient.value
        this.props.getDrinksByIngredient(drinkByIngredient)
        this.drinkForm2.reset()
    }

    render() {
        return (
            <div id="search-form" className="box-header">
                <form ref={(input) => {this.drinkForm = input}} onSubmit={(e) => {this.createDrinkName(e)}}>
                    <label htmlFor="drink-by-name">Search By Name</label><br/>
                    <input ref={(input) => {this.drinkByName = input}} type="text"/><br/>
                    <input className="submit" type="submit" value="Submit"/>
                </form>
                <form onSubmit={(e) => {this.createDrinkName2(e)}} ref={(input) => {this.drinkForm2 = input}} >
                    <label htmlFor="drink-by-ingredient">Search By Ingredient</label><br/>
                    <input ref={(input) => {this.drinkByIngredient = input}} type="text"/><br/>
                    <input className="submit" type="submit" value="Submit"/>
                </form>
                <form onSubmit={(e) => {this.props.getRandomDrink(e)}}><br/>
                    <input className="submit" type="submit" value="Random Drink" />
                </form>
            </div>
        )
    }
}

export default SearchDrinks
