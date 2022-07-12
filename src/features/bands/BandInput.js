import React, { useState } from "react";


function BandInput({ onBandSubmit }) {
  const [name, setName] = useState("");
 
  function handleChange(e) {
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    onBandSubmit(name)
    setName("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input 
            type="text" 
            name="name"
            onChange={handleChange} 
            value={name} 
          />
        </label>
        <button type="submit">Add Band</button>
      </form>
    </div>
  );
}

export default BandInput;
