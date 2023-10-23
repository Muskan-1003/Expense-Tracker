import React from 'react'
import { useState } from 'react'

const AddTransaction = () => {
  const [text,setText]=useState("");
  const [amount,setAmount]=useState(0);

  return (
    <div>
      <form >
        <div className="form-control">
          <label htmlForfor="text">Text</label>
          <input type="text" 
           placeholder="Enter text..."
           onChange={(e)=>setText(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlForfor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number"  
          placeholder="Enter amount..." 
          onChange={(e)=>setAmount(e.target.value)}/>
        </div>
        <button class="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
