
/*Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, and delete elements.
 */





class Recipe {   // This is our first class 
    constructor(name, ingredients) {
        this.name = name;
        this.ingredients = ingredients;
    }

    toString() {
        return `${this.name}: ${this.ingredients.join(', ')}`;
    }
}

class MenuApp {  // This will be our second class as required 
    constructor() {  // Making use of a constructor like we saw in the video
        this.recipes = []; // this our array where we will be holding our recipes
    }

    showMenu() {
        let menu = "Whats on the Menu!\n\n";    // This is what we are going to see when the app is first opened, 
        menu += "1. View Recipes\n";  //  so we can view our recipe
        menu += "2. Add Recipe\n";    // add a recipe and ingrediants
        menu += "3. Delete Recipe\n";  // remove a selected recipe
        menu += "4. Exit\n";           // exit the app

        return parseInt(prompt(menu));
    }

    viewRecipes() {
        if (this.recipes.length === 0) {  // This is how we are going to be able to view our recipe
            alert("No recipes available.");
        } else {
            let recipeList = "Recipes:\n\n";
            this.recipes.forEach((recipe, index) => {  // making use of an arrow function which we learned a week ago
                recipeList += `${index + 1}. ${recipe}\n`;
            });
            alert(recipeList);
        }
    }

    addRecipe() {   // This is how add our recipe and add the ingrediants to the recipe as well
        let name = prompt("Whatcha Cookin Good Lookin");
        let ingredients = prompt("Add your Tasty Ingrediants here")
                            .split(',')
                            .map(ingredient => ingredient.trim());  // Another Arrow function

        let newRecipe = new Recipe(name, ingredients);
        this.recipes.push(newRecipe); // we see push so we know thats going to be adding on 
        alert("That Looks Goooood");
    }

    deleteRecipe() {  // Here is how we can delete a recipe 
        if (this.recipes.length === 0) {
            alert("No recipes");
        } else {
            this.viewRecipes();
            let indexToDelete = parseInt(prompt("What Recipe would you like removed")) - 1;

            if (indexToDelete >= 0 && indexToDelete < this.recipes.length) {
                this.recipes.splice(indexToDelete, 1);  // we see splice here so that tells us its removing something
                alert("Yuck, that looked gross");
            } else {
                alert("Wrong Recipe");
            }
        }
    }

    run() {   // Then like we saw in the video for this week, using switch, then case and a break after each new case
        let choice;
        do {
            choice = this.showMenu();
            switch (choice) {
                case 1:
                    this.viewRecipes();
                    break;
                case 2:
                    this.addRecipe();
                    break;
                case 3:
                    this.deleteRecipe();
                    break;
                case 4:
                    alert("Everyone out of the kitchen!!--Gordon Ramsey voice"); // exit message by our fearless leader
                    break;
                default:
                    alert("Can't do that Brotha"); // message pops up when we made an error
            }
        } while (choice !== 4);
    }
}

const menuApp = new MenuApp(); // and this is going to run our app so lets look at it in a live server now
menuApp.run();
