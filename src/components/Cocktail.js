import React, { Component } from 'react';
import Drink from "./Drink"
import Footer from "./Footer"
import Header from "./Header"
import SearchDrinks from "./SearchDrinks"
import Recipe from "./Recipe"
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
      activateRecipe: true,
      activateDrinkError: false,
      activateRecipeError: false,
      activateNoRecipe: false
    }

  }

  getDrinksByIngredient(drinkByIngredient) {
    fetch(`http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drinkByIngredient}`)
    .then(response => {
      console.dir(response.headers.get("Content-Type"))
      if(response.headers.get("Content-Type") === "application/json") {
        return response.json()
      } else {
        return null
      }
    })
    .then(drinks => {
      console.dir(drinks)
      if(drinks === null) {
        this.setState({
          drinks: [],
          activateDrinkError: true,
          activateDrink: true
        })
      } else {
          this.setState({
          drinks,
          activateRecipe: true,
          activateDrink: false,
          activateDrinkError: false
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
            activateDrinkError: true
          })
        }
        else {
          this.setState({
            drinks,
            activateDrink: false,
            activateRecipe: true,
            activateDrinkError: false
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
      if(!ibaDrinks) {
        this.setState({

        })
      }
      for(let i = 0; i < ibaDrinks.length; i++) {
        if (ibaDrinks[i].name === drinkName) {
          this.setState({
            ibaRecipe: ibaDrinks[i],
            activateRecipe: false,
          })
        }
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
        activateDrink: false,
        activateRecipe: true,
        activateDrinkError: false
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    const drinkList = this.state.drinks.drinks
    return (
      <div>
        <div id="header">
          <Header />
        </div>
        <div id="main">
          <section>
            <SearchDrinks getRandomDrink={this.getRandomDrink} getDrinksByIngredient={this.getDrinksByIngredient} getDrinksByName={this.getDrinksByName} />
            {this.state.activateDrinkError === false ? "" : <h2>Not A Valid Input</h2>}
            { <ul className="drink-list">
              {this.state.activateDrink ? "" : drinkList.map(drink => <Drink  getRecipe={this.getRecipe} key={drink.idDrink} details={drink} /> )}
            </ul>}
          </section>
          <aside>
            {this.state.activateRecipe ?
            <div className="recipe">
              <h2 className="recipe-header">IBA Recipe</h2><br/>
              <img src="/assets/recipe-splash.png" alt="recipe-splash" id="recipe-splash"/>
            </div>:
            <Recipe activate={this.state.activateRecipe} details={this.state.ibaRecipe} />}
          </aside>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Cocktail;
