import React, { useState, useEffect } from 'react';

function removeHtmlTags(input) {
  return input ? input.replace(/<[^>]*>?/gm, '') : '';
}

function RecipeApp() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://api.spoonacular.com/recipes/random';
    const apiKey = 'f064385afb96495d9195cb5b0e85f9c4'; 

    const params = {
      limitLicense: true,
      number: 10,
      tags: 'vegetarian,dessert',
      apiKey: apiKey,
      addRecipeInformation: true,
    };

    const url = new URL(apiUrl);
    Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.recipes);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
      });
  }, []);


  return (
    <div className="recipe-cards">
    {recipes.map((recipe) => (
             
      <div className="recipe-card" key={recipe.id}>
        <h3>{recipe.title}</h3>
        <img src={recipe.image} alt={recipe.title} />
        <p>{recipe.cuisines}</p>
        <p>Instructions: {recipe.instructions}</p>

      </div>
      ))}
    </div>
  );
}

export default RecipeApp;
