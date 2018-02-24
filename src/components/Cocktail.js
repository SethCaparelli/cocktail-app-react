import React, { Component } from 'react';
import Drink from "./Drink"
import Footer from "./Footer"
import Header from "./Header"
import SearchDrinks from "./SearchDrinks"
import Recipes from "./Recipes"
import '../App.css';


class Cocktail extends Component {
  constructor() {
    super()
    this.getRandomDrink = this.getRandomDrink.bind(this)
    this.getDrinksByIngredient = this.getDrinksByIngredient.bind(this)
    this.getRecipe = this.getRecipe.bind(this)
    this.getDrinksByName = this.getDrinksByName.bind(this)
    this.state = {
      drinks: [],
      ibaRecipe: [],
      activateDrink: true,
      activateRecipe: false,
      activateDrinkError: false,
      activateRecipeError: false,
      drinkListExpand: false
    }
  }

  getDrinksByIngredient(drinkByIngredient) {
    fetch(`http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drinkByIngredient}`)
    .then(response => {
      if(response.headers.get("Content-Type") === "application/json") {
        return response.json()
      } else {
        return null
      }
    })
    .then(drinks => {
      if(drinks === null) {
        this.setState({
          drinks: [],
          ibaRecipe: [],
          activateDrinkError: true,
          activateDrink: true,
          activateRecipe: false,
          activateRecipeError: false,
          drinkListExpand: false
        })
      }
      else if(drinks.drinks.length > 1) {
        console.log(drinks.drinks.length)
        this.setState({
          drinks,
          ibaRecipe: [],
          activateRecipe: false,
          activateDrink: false,
          activateDrinkError: false,
          activateRecipeError: false,
          drinkListExpand: true
        })
      }
      else {
          this.setState({
          drinks,
          ibaRecipe: [],
          activateRecipe: false,
          activateDrink: false,
          activateDrinkError: false,
          activateRecipeError: false,
          drinkListExpand: false
        })
      }
    })
  }

  getDrinksByName(drinkByName) {
      fetch(`http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkByName}`)
      .then(response => {
        if(response.headers.get("Content-Type") === "application/json") {
          return response.json()
        } else {
          return null
        }
      })
      .then(drinks => {
        if(drinks.drinks === null) {
          this.setState({
            drinks: [],
            activateDrinkError: true,
            activateDrink: true,
            drinkListExpand: false
          })
        }
        if(drinks.drinks.length > 1) {
          console.log(drinks.drinks.length)
          this.setState({
            drinks,
            ibaRecipe: [],
            activateDrink: false,
            activateRecipe: false,
            activateDrinkError: false,
            activateRecipeError: false,
            drinkListExpand: true
          })
        }
        else {
          this.setState({
            drinks,
            ibaRecipe: [],
            activateDrink: false,
            activateRecipe: false,
            activateDrinkError: false,
            activateRecipeError: false,
            drinkListExpand: false,
          })
        }
      })

      .catch(error => console.log(error))
  }

  getRecipe(drinkName) {
    fetch("/iba.json")
    .then(response => {
      return response.json()
    })
    .then(ibaDrinks => {
      const matchedRecipe = ibaDrinks.filter(recipe => {
        return recipe.name === drinkName
      })
      if(matchedRecipe.length === 0) {
        this.setState({
          activateRecipeError: true
        })
      }
      else if(matchedRecipe[0].name === drinkName) {
        this.setState({
          ibaRecipe: matchedRecipe[0],
          activateRecipe: true,
          activateRecipeError: false
        })
      }
    })
    .catch(error => console.log(error))
  }

  getRandomDrink(event) {
    event.preventDefault()
    fetch("http://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(response => {
      return response.json()
    })
    .then(drink => {
      this.setState({
        drinks: drink,
        ibaRecipe: [],
        activateDrink: false,
        activateRecipe: false,
        activateDrinkError: false,
        activateRecipeError: false,
        drinkListExpand: false
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    const drinkList = this.state.drinks.drinks
    return (
      <main id="body">
        <div id="main-header">
          <Header />
        </div>
        <div id="main">
          <section className="box" id="drink-box">
            <SearchDrinks getRandomDrink={this.getRandomDrink} getDrinksByIngredient={this.getDrinksByIngredient} getDrinksByName={this.getDrinksByName} />
            {this.state.activateDrinkError === false ? <h5>=</h5> : <h5 className="not-valid">Not A Valid Input</h5>}
            <div id={this.state.drinkListExpand === false ? "drink-list" : "drink-list-expand"}>
              {this.state.activateDrink ? <img className="splash-logo" id="camera-logo"  src="/assets/camera-logo.png" alt="camera-logo" /> : drinkList.map(drink => <Drink  getRecipe={this.getRecipe} key={drink.idDrink} details={drink} /> )}
            </div>
          </section>
          <section className="box" id="recipe-box">
            <div className="box-header">
              <h2>IBA Recipe</h2>
            </div>
              {this.state.activateRecipeError ? <h5 className="not-valid">Recipe Unavailable</h5> : <h5>=</h5>}
            <div id="recipe-list">
              {this.state.activateRecipe === false ?
              <img  className="splash-logo" src="/assets/cocktail-logo.png" alt="recipe-splash" id="recipe-splash"/>:
              <Recipes activate={this.state.activateRecipe} details={this.state.ibaRecipe} />}
            </div>
          </section>
        </div>
        <footer>
          <Footer />
        </footer>
      </main>
    );
  }
}

export default Cocktail;
