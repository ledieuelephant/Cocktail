const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)

fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+ urlParams.get("id"))
.then(res => res.json())
.then(json => {
    console.table(json.drinks)
    json.drinks.map(drink => {
        document.getElementsByClassName("recipe-name")[0].textContent = drink.strDrink
        // Create the pics
        var recipepics = document.getElementsByClassName("recipe-pics")[0]
        var image = document.createElement("img")
        image.src = drink.strDrinkThumb
        recipepics.appendChild(image)
        // Create the ingredients
        var section = document.getElementById("recipe-ingredients")
        function ingredient(name, dose){
            // Create icon
            var i = document.createElement("i")
            i.classList.add("fa-solid", "fa-martini-glass-empty")
            // create the name
            var nameingredient = document.createElement("p")
            nameingredient.textContent = name
            nameingredient.className = "ingredient-name"
            // create the cl
            var cl = document.createElement("p")
            cl.textContent = dose
            cl.className = "cl"
            // Assembly
            var div = document.createElement("div")
            div.className = "recipe-ingredient"
            div.appendChild(i)
            div.appendChild(nameingredient)
            div.appendChild(cl)
            section.appendChild(div)
        }
        if (drink.strIngredient1) {
            ingredient(drink.strIngredient1, drink.strMeasure1)
        }
        if (drink.strIngredient2) {
            ingredient(drink.strIngredient2, drink.strMeasure2)
        }
        if (drink.strIngredient3) {
            ingredient(drink.strIngredient3, drink.strMeasure3)
        }
        if (drink.strIngredient4) {
            ingredient(drink.strIngredient4, drink.strMeasure4)
        }
        if (drink.strIngredient5) {
            ingredient(drink.strIngredient5, drink.strMeasure5)
        }
        if (drink.strIngredient6) {
            ingredient(drink.strIngredient6, drink.strMeasure6)
        }
        if (drink.strIngredient7) {
            ingredient(drink.strIngredient7, drink.strMeasure7)
        }
        if (drink.strIngredient8) {
            ingredient(drink.strIngredient8, drink.strMeasure8)
        }
        if (drink.strIngredient9) {
            ingredient(drink.strIngredient9, drink.strMeasure9)
        }
        if (drink.strIngredient10) {
            ingredient(drink.strIngredient10, drink.strMeasure10)
        }
        if (drink.strIngredien11) {
            ingredient(drink.strIngredient11, drink.strMeasure11)
        }
        if (drink.strIngredient12) {
            ingredient(drink.strIngredient12, drink.strMeasure12)
        }
        if (drink.strIngredient13) {
            ingredient(drink.strIngredient13, drink.strMeasure13)
        }
        if (drink.strIngredient14) {
            ingredient(drink.strIngredient14, drink.strMeasure14)
        }
        if (drink.strIngredient15) {
            ingredient(drink.strIngredient15, drink.strMeasure15)
        }
        // Creation des instructions
        var recipecooking = document.getElementById("recipe-cooking")
        var cooking = document.createElement("p")
        cooking.textContent = drink.strInstructions
        recipecooking.appendChild(cooking)
    })
})