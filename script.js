fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
.then(res => res.json())
.then(json => {
    console.table(json.drinks)
    // recupération de la section
    var recipes = document.getElementById("recipes")
    json.drinks.map(drink => {
        // creation de la card
        var card = document.createElement("a")
        card.href = "./cocktail.html?id=" + drink.idDrink
        card.className = "cocktail-card"
        // creation de l'image
        var image = document.createElement("img")
        image.src = drink.strDrinkThumb
        // creation du body
        var body = document.createElement("div")
        body.className = "cocktail-body"
        // creation du name
        var name = document.createElement("h3")
        name.className = "cock-name"
        name.textContent = drink.strDrink
        // creation de l'ingredient
        var ingredients = document.createElement("h4")
        ingredients.className = "cock-ingredients"
        ingredients.textContent = drink.strIngredient1 + ", " + drink.strIngredient2
        // creation de la categorie
        var categories = document.createElement("h4")
        categories.className = "cock-cat"
        categories.textContent = drink.strCategory

        // creation de l'icon
        var icondiv = document.createElement("div")
        icondiv.className = "cocktail-icon"

        var icon = document.createElement("i")
        icon.classList.add("fa-solid", "fa-chevron-right")

        // Assemblage
        body.appendChild(name)
        body.appendChild(ingredients)
        body.appendChild(categories)

        icondiv.appendChild(icon)
        
        card.appendChild(image)
        card.appendChild(body)
        card.appendChild(icondiv)

        

        recipes.appendChild(card)
    })
})

document.getElementById("cocktail-find").onclick = function(){
    var name = document.getElementById("cocktail-name").value
    console.log(name)
    document.location.href = "./search.html?name="+name
}