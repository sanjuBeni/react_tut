import { useEffect, useMemo, useState } from 'react';
import './App.css';
import './Style.css';
import style from './style.module.css';
// import ClassComp from './ClassComp';

function App() {

  const [formData, setFormData ] = useState({});
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100)


  const memoCall = useMemo(() => {
        console.log("count call");
        return count;
    },[count]);

  
    const countFun = () => {
        console.log("count call");
        return count;
    }

  return (
    <div className="App">
      <h2>{memoCall}</h2>
      <button onClick={() => setCount(count+1)}>Count</button>
      <h2 className='color'>{data}</h2>
      <button onClick={() => setData(data+1)}>Data</button>
    </div>
  );

  
  
}

export default App;
