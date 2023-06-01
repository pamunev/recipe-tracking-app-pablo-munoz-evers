import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
    
    //continue this, then do labels and inputs for each box. Remember to include the placeholder atribute for each. 
    // The instructions say to use <textarea> for the ingredients and preparation. Figure out how. 
    // Then create a submit handler for the Create button.
  }
  
  const [recipeForm, setRecipeForm] = useState(initialFormState)
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipeForm((prevForm) => ({...prevForm, [name]: value }) )
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(recipeForm);
    setRecipeForm(initialFormState);
  }
  
  return (
    <form name="create" className="recipe-list" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input name="name" 
                     placeholder="Name"
                     value={recipeForm.name}
                     onChange={handleChange} />
            </td>
            <td>
              <input name="cuisine" 
                     placeholder="Cuisine"
                     value={recipeForm.cuisine}
                     onChange={handleChange} />
            </td>
            <td>
              <input name="photo" 
                     placeholder="URL" 
                     value={recipeForm.photo}
                     onChange={handleChange} />
            </td>
            <td>
              <textarea name="ingredients" 
                     placeholder="Ingredients"
                     value={recipeForm.ingredients}
                     onChange={handleChange} />
            </td>
            <td>
              <textarea name="preparation" 
                     placeholder="Preparation" 
                     value={recipeForm.preparation}
                     onChange={handleChange} />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
