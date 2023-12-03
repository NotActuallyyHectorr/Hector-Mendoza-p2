const recipe = {
    name: "Simple Iced Coffee",
    description: "Coffee has been around for a long time, a beloved drink, something to get us throuhg the day." +
        "Coffee originally came from Ethiopia, founded by an Ethiopian goat herder around 800 AD. Fast foward many years" +
        "and we have a coffee industry that is worth $495.50 billion. Many of us go to Starbucks, McDonalds, or Dunkin" +
        "to get our daily dose of caffeine for the day. But in this article we will talk about an esay at home recipe" +
        "that you can make every morning. ",
    ingredients: [
        "For this recipe we will be using ingredients we can find at home! First off we will start off with your choise",
        "ground coffee, instant coffee, etc. Dairy options or if you lack toes, almond milk. Also your choice of creamer, vanilla",
        "extract, and finally choice of cold foam. That is all that is needed to make our at home iced coffee!",
        "You can always add other ingredients to your coffee!"
    ],
    instructions: [
        "To create the simple iced coffee, the first step is to bring a pan of water to a boil. Once it is to a boil, place some",
        "coffee or expresso in a cup, and pour in the boiling water at about 20% of the cup. It is ideal to stir it finely. After this you want to pour milk",
        "into your coffee. You would want to add around 40% of the cup, and stir once again. After that you would want to add your chouse",
        "of creamer, also add vanilla extract, and lastly add the cold foam. The iced coffee is ready!"
    ]
};

function displayRecipe() {
    document.querySelector('#recipe-name').textContent = recipe.name;
    document.querySelector('#recipe-description').textContent = recipe.description;

    const ingredientsList = document.getElementById('ingredients-list');
    recipe.ingredients.forEach(ingredient => {
        const span = document.createElement('span'); // Create a span instead of a list item
        span.textContent = ingredient;
        ingredientsList.appendChild(span);
        ingredientsList.appendChild(document.createElement('br')); // Add a line break after each ingredient
    });

    const instructionsList = document.getElementById('instructions-list');
    recipe.instructions.forEach(instruction => {
        const span = document.createElement('span'); // Create a span instead of a list item
        span.textContent = instruction;
        instructionsList.appendChild(span);
        instructionsList.appendChild(document.createElement('br')); // Add a line break after each instruction
    });

    const authorInfo = document.createElement('p'); 
    authorInfo.textContent = 'Author: Hector Mendoza'; 
    document.querySelector('footer').appendChild(authorInfo);
}

let emailList = [];

function addEmail() {
    const emailInput = document.getElementById('email-input');
    const email = emailInput.value.trim(); 

    if (email !== '' && isValidEmail(email)) { 
        emailList.push(email); // Add email to the array
        emailInput.value = ''; // Clear the input field
        alert('Thank you for signing up!'); // Display a confirmation message (can be replaced with a more styled message)
        console.log('Email list:', emailList); // Log the updated email list (for demonstration)
    } else {
        alert('Please enter a valid email address.'); // Display an error message for an invalid email
    }
}

function isValidEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

window.onload = displayRecipe;