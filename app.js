let data;

// random meal function            
async function getRandomMeal() {
    try {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
        data = await response.json();
        console.log(data.meals)
        displaymeal(data.meals[0]);
    } catch (error) {
        console.error(error);
    }
}

// displaying the random meal in html
function displaymeal(meals){
    let middlContent = document.getElementById('middlContent')

    let randomDish = `<img class="randomMeal" src="${meals.strMealThumb}">
    <h1>${meals.strMeal}<br>Category: ${meals.strCategory}<br> Region: ${meals.strArea}</h1>
    <button id="ingredients">Ingredients</button>
    <button id="recipe">Recipe</button>`

    middlContent.innerHTML = randomDish;
}

getRandomMeal();





// function searched meal
let searchBar = document.getElementById('search')

async function getSearchedDishes() {
    let meals = searchBar.value
    try {
      let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${meals}`);
      let resp = await data.json();

      if(resp.meals){
        searchedDishes(resp.meals);
      }

    } catch (error) {
      console.error(error);
    }
  }
  
//  searched dishes category function 
function searchedDishes(array){
    let searchedMeal = ""
    array.forEach((meals)=>{
        searchedMeal+=`<div class="dishes">
        <img class="dishImage" src="${meals.strMealThumb}" alt="">
        <h3>${meals.strMeal}</h3>
        </div>`
    })
    document.getElementById('searchedCategory').innerHTML = searchedMeal;
}


searchBar.addEventListener("keypress", function(e){
    if(e.key == "Enter"){
        getSearchedDishes();
    }
})

