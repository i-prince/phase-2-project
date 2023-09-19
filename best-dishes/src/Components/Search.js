import React, { useState } from "react";
import Addreview from './AddReview';

function removeHtmlTags(input) {
  return input ? input.replace(/<[^>]*>?/gm, '') : '';
}

function Search() {
  const [recipes, setRecipes] = useState([]);
  const [recipeComments, setRecipeComments] = useState({});

  const handleCommentSubmit = (comment, recipeId) => {
    if (!recipeComments[recipeId]) {
      recipeComments[recipeId] = [];
    }
    recipeComments[recipeId].push(comment);
    setRecipeComments({ ...recipeComments });
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleOnChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    const apiUrl = 'https://api.spoonacular.com/recipes/complexSearch';
    const apiKey = 'f064385afb96495d9195cb5b0e85f9c4'; 

    const params = {
      query: searchQuery,
      apiKey: apiKey,
      number: 3, 
      addRecipeInformation: true,
    };

    const url = new URL(apiUrl);
    Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.results);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
      });
  };

  return (
    <div className="container mt-5">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type a recipe"
          value={searchQuery}
          onChange={handleOnChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSearch}
          >
            Find Recipe
          </button>
        </div>
      </div>
      <h2>Search Results</h2>
      {searchResults.map((recipe) => (
        <div className="recipe-card" key={recipe.id}>
          <h3>{recipe.title}</h3>
          <img src={recipe.image} alt={recipe.title} />
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

export default Search;

