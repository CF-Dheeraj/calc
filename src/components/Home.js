import React, { useState } from 'react'

function Home() {
    const[result,setResult] = useState(0);

    const calcAdd = ()=>
    {
        let a = Number(document.getElementById("exampleInputEmail1").value);
        let b = Number(document.getElementById("exampleInputPassword1").value);
        let c = a+b;
        console.log(c);
        setResult(c);
    }

  return (
    <div className='container'>
      <form>
    <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">First Number</label>
        <input type='number'  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
         
    </div>
    <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Second Number</label>
        <input type='number' className="form-control" id="exampleInputPassword1"/>
    </div>
    
    
    </form>
    <button  className="btn btn-primary" onClick={calcAdd}>Add</button>
    <div className='container'>
        <h2>The result of the above operation is</h2>
        <h4 style={{color:'green'}}>{result}</h4>

    </div>
    </div>
  )
}

export default Home
