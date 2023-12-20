let data;

// Random meal function            
async function getRandomMeal() {
    try {
        // Fetching random meal api
        var response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
        data = await response.json();
        console.log(data.meals)
        displaymeal(data.meals[0]);
    } catch (error) {
        console.error(error);
    }
}

// Displaying the random meal in html
function displaymeal(meals){
    // console.log(meals)
    document.querySelector(".randomMeal").src = meals.strMealThumb
    document.querySelector("#randomHeading").innerHTML = `${meals.strMeal}<br>Category: ${meals.strCategory}<br> Region: ${meals.strArea}`;
}

getRandomMeal();

// Function searched meal
let searchBar = document.getElementById('search')

async function getSearchedDishes() {
    let meals = searchBar.value
    try {
    // Fetching searched meal api
      let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${meals}`);
      let resp = await data.json();

      if(resp.meals){
        searchedDishes(resp.meals);
      }

    } catch (error) {
      console.error(error);
    }
  }
  
//  Function to display searched dishes
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

// Event listener to display the dishes when category is entered
searchBar.addEventListener("keypress", function(e){
    if(e.key == "Enter"){
        getSearchedDishes();
    }
})


document.getElementById("ingredients").addEventListener("click" , ()=>{
    getIngredients(data.meals[0].idMeal);
})


// Function to fetch and display ingredients
async function getIngredients(mealId) {
    try {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        let detailedData = await response.json();

        displayIngredients(detailedData.meals);
    } catch (error) {
        console.error(error);
    }
}

// Function to display ingredients in the modal
function displayIngredients(meals) {
    const meal = meals[0];

    let ingredientsList = "<h6>Ingredients:</h6><ul id='list'>";

    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];

        if (ingredient && measure) {
            ingredientsList += `<li>${measure} ${ingredient}</li>`;
        }
    }

    ingredientsList += "</ul>";

    document.getElementById('modal-content').innerHTML = ingredientsList;

    document.getElementById('modal').style.display = 'block';
}

document.querySelector("#closeBtn").addEventListener("click" , ()=>{
    document.getElementById("modal").style.display = "none"
})
