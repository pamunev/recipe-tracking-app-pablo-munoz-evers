import React from "react"


function Recipe({ name, cuisine, photo, ingredients, preparation, deleteRecipe, index }) {
  console.log(index)
  return (
            <tr key={index}>
              <td>{name}</td>
              <td>{cuisine}</td>
              <td>
                <img src={photo} 
                     alt={name} 
                     style={{objectFit: "scale-down", width: "100%", height: "100%"}}/>
              </td>
              <td>{ingredients}</td>
              <td>{preparation}</td>
              <td>
                <button name="delete" onClick={() => deleteRecipe(index)}>Delete</button>
              </td>
            </tr>
    )
}

export default Recipe;

