import { useEffect, useState } from 'react';
import './App.css';
import './Style.css';
import style from './style.module.css';
// import ClassComp from './ClassComp';

function App() {

  const [formData, setFormData ] = useState({});
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100)

  const handleForm  = (e) =>{
    e.preventDefault();
    console.log(formData);
  }

  const handleCheckbox = (e) => {
    setFormData({...formData, [e.target.name] : e.target.checked})
  }

  const handleData  =  (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }
  const hello = () =>  "hello";
  
  useEffect(()=> {
      console.log("run useEffet hook and count also run", count);  
  }, [count]);

  useEffect(()=> {
      console.log("run useEffet hook and data also run", data);  
  }, [data]);

  
  

  return (
    <div className="App">
      <form onSubmit={handleForm}> 
        <input type='text' name='name' onChange={handleData} placeholder='Enter name'/>
        <br></br><br/>
        <select name='select' onChange={handleData}>
            <option>Select Value</option>
            <option>React</option>
            <option>Laravel</option>
        </select>
        <br></br><br/>
        <input type='checkbox' name = "tnc" onChange={handleCheckbox} />Accept Term & Condition
        <br></br><br/>
        <button type='sumit'>Submit</button>
      </form>
      <h2 className={style.myclass}>{count}</h2>
      <button onClick={() => setCount(count+1)}>Count</button>
      <h2 className='color'>{data}</h2>
      <button onClick={() => setData(data+1)}>Data</button>
      {/* <ClassComp/> */}
    </div>
  );
}

export default App;
