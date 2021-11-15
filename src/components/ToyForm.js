import React, {useEffect, useState} from "react";


function ToyForm({setToys, handleNewToy}) {
  const [name, setName] = useState(" ")
  const [image, setImage] = useState([])
  const [likes, setLikes] = useState (0)
  
  function handleNewName (event) {
    setName(event.target.value)
  }
  function handleNewImage (event) {
    setImage(event.target.value)
  }
  function handleNewLikes (event) {
    setLikes(event.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
      fetch("http://localhost:3001/toys", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          name, 
          image, 
          likes
        })
      })
    .then(res => res.json())
    .then(newToy => {
      handleNewToy(newToy)
    });
  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit = {handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleNewName}
          value=  {name}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleNewImage}
          value=  {image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
