
function cakes(recipe, ingredients) {
    var maxCakes = Infinity;
    var recipeIngredients = Object.keys(recipe);
    for(var i =0; i < recipeIngredients.length; i ++) {
        //modulo
        let currentIngredient = recipeIngredients[i];
        //data validation
        if(typeof ingredients[currentIngredient] === "undefined")
            return 0;
        var totalCakesPossible = Math.floor(ingredients[currentIngredient] / recipe[currentIngredient]);
        if(totalCakesPossible < maxCakes)
            maxCakes = totalCakesPossible;
    }
    return maxCakes;
}
var recipe = {flour: 500, sugar: 200, egg: 1};
var available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
console.log(cakes(recipe, available));
console.log(Infinity);
console.log(-Infinity);

