
//The purpose of this Lab is to get a solid understanding of the .filter() and .map() advanced array methods.
//These methods will be used extensively on future projects


//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 15,
        "name": "Pho",
        "cuisine": "Vietnamese",
        "servings": 4,
        "ingredients": ["beef", "ginger"]
    },
]

//Example function
//IMPORTANT: Take the time to step through this example function with a breakpoint until you could explain what is going on to someone else before starting this lab.

function filterExample(){
    //Debug tip: Use a console.log(el) inside the filter function to get a visualization of what el represents and see all its properties! This helps you to know what you can access with dot notation inside the filter. Do this every time you use a .filter or else you are working in the dark!
    let results;
    results = dishes.filter(function(el){
        console.log("el inside filterExample's filter: ", el)
        if(el.cuisine === "Mexican"){
            return true;
        }
        else{
            return false;
        }})

    return results;
}

let mexicanFood = filterExample();
console.log('mexicanFood from filterExample', mexicanFood)



//Reminder: Do not move on to problem one until understand the example completely!!
//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

function problemOne(){

    let results;
    results = dishes.filter(function(element){
        if(element.cuisine === "Vegetarian"){
            return true;
        }
        else{
            return false;
        }
    })

    return results;
}

let vegetarianFood = problemOne();
console.log('All the vegetarian food', vegetarianFood)

//2. Create a function that will prompt the user to enter a cuisine type and then return all dishes that match that type
//Filter

function problemTwo(){
    
    let results;
    let desiredDish = prompt('What is your desired dish?')
    results = dishes.filter(function(element){
        if(element.cuisine === desiredDish){
            return true;
        }
        else{
            return false;
        }
    })

    return results;
}

let userChoice = problemTwo();
console.log('User selected food', userChoice);

//3. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter

function problemThree(){
    
    let results;
    results = dishes.filter(function(element){
        if(element.cuisine === 'Italian' && element.servings > 5){
            return true;
        }
        else{
            return false;
        }
    })

    return results;
}

let bigItalianFood = problemThree();
console.log('Italian foods over 5 servings', bigItalianFood);

//4. Create a function that will return only dishes whose id number matches their serving count.
//Filter

function problemFour(){
    
    let results;
    results = dishes.filter(function(element){
        if(element.id === element.servings){
            return true;
        }
        else{
            return false;
        }
    })

    return results;
}

let servingsMatchId = problemFour();
console.log('Foods with matching servings and IDs', servingsMatchId);

//5. Create a function that will return only dishes whose serving count is even.
//Filter

function problemFive(){
    
    let results;
    results = dishes.filter(function(element){
        if(element.servings % 2 === 0){
            return true;
        }
        else{
            return false;
        }
    })

    return results;
}

let evenServingCount = problemFive();
console.log('Foods with an even serving count', evenServingCount);

//6. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Double Hint: Research 'javascript does array include item'
//Filter

function problemSix(){
    
    let results;
    results = dishes.filter(function(element){
        dishToFilter = element.ingredients.includes('chickpea');

        return dishToFilter;
    })

    return results;
}

let chickpeaIngedient = problemSix();
console.log('Foods with an chickpeas as an ingredient', chickpeaIngedient);

//7. Create a function that will prompt the user to type the name of one ingredient. Then use a filter to find all the dishes whose ingredients array INCLUDES that ingredient. Return the new array.
//Filter

function problemSeven(){
    
    let results;
    let includedIngridient = prompt('What ingredient would you like to be included?');
    results = dishes.filter(function(element){
        isAnIngredient = element.ingredients.includes(includedIngridient);

        return isAnIngredient;        
    })

    return results;
}

let userExculdedDishes = problemSeven();
console.log('Foods with a certain ingredient', userExculdedDishes);

//8a. Create a function that will return an array of the string cuisine types. Ie, ["Italian", "Italian", "Mexican", ...]
//Map

function problemEigthA(){
    
    let results;

    results = dishes.map(function(element){
        return element.cuisine;      
    })

    return results;
}

let cuisineTypes = problemEigthA();
console.log('All the types of cuisines', cuisineTypes);

//9. Create a function that will return an array of strings, with the cuisine type appended to the start of the dish's name. Ie, ["Italian Pizza", "Italian Spaghetti", ...]
//Map 

function problemNine(){
    
    let results;

    results = dishes.map(function(element){
        return `${element.cuisine} ${element.name}`;      
    })

    return results;
}

let cuisineAndFood = problemNine();
console.log('The cuisine type and food', cuisineAndFood);

//10. Create a function that will use advanced array methods on the 'dishes' array and return the result ["Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"]

function problemTen(){
    
    let results;

    results = dishes.filter(function(element){
        if(element.cuisine === 'Vegetarian'){
            return true;
        }
        else{
            return false;
        }
    })

    results = results.map(function(element){
        return `${element.cuisine} ${element.name}`;
    })

    return results;
}

let vegetarianCuisineAndFood = problemTen();
console.log('All vegetarian cuisines', vegetarianCuisineAndFood);



//BONUS

//8b. Use the filter method to eliminate duplicate from problem 8a.

function problemEigthB(){
    
    let results;
    let duplicateResults = [];

    results = dishes.map(function(element){
        return element.cuisine;      
    })

    results = results.filter(function(element){
        if(duplicateResults.includes(element)){
            return false;
        }
        else{
            duplicateResults.push(element);
            return true;
        }
    })

    return results;
}

let individualCuisineTypes = problemEigthB();
console.log('All the individual types of cuisines', individualCuisineTypes);

//11. Create a function that will return dishes whose ingredients array INCLUDES "tomato" OR "cheese".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter

function problemEleven(){
    
    let results;
    results = dishes.filter(function(element){
        if(element.ingredients.includes('tomato') || element.ingredients.includes('cheese')){
            return true;
        }
        else{
            return false;
        }
    })

    return results;
}

let cheeseOrTomatoCuisines = problemEleven();
console.log('Foods with tomato or cheese as ingredients', cheeseOrTomatoCuisines);

//12. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.



//13. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.
