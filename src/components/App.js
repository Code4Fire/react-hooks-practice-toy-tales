import React, { useEffect, useState } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {

  const[toys, setToys]=  useState([]);
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  function handleNewToy(newToy) {
    setToys([...toys, newToy])
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then((response) => response.json())
    .then((data) => {
      setToys(data);
      // console.log(data)
    });
  }, []);

  return (
    <>
      <Header />
      {showForm ? <ToyForm 
        handleNewToy= {handleNewToy} 
        /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys = {toys}/>
    </>
  );
}

export default App;
