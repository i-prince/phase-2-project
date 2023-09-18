import React, { useState, useEffect } from 'react';
import Addreview from './AddReview';

function removeHtmlTags(input) {
  return input ? input.replace(/<[^>]*>?/gm, '') : '';
}

function RecipeApp() {
  const [recipes, setRecipes] = useState([]);
  const [recipeComments, setRecipeComments] = useState({});

  const handleCommentSubmit = (comment, recipeId) => {
    if (!recipeComments[recipeId]) {
      recipeComments[recipeId] = [];
    }
    recipeComments[recipeId].push(comment);
    setRecipeComments({ ...recipeComments });
  };

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
          <h3>Comments</h3>
          <ul className="comment-list">
            {recipeComments[recipe.id] &&
              recipeComments[recipe.id].map((comment, index) => (
                <li key={index}>
                  {index + 1}. {comment}
                </li>
              ))}
          </ul>

          <Addreview onCommentSubmit={(comment) => handleCommentSubmit(comment, recipe.id)} />
        </div>
      ))}
    </div>
  );
}

export default RecipeApp;

