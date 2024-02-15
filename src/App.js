import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import './Style.css';
import style from './style.module.css';
import ForwordRefCom from './ForwordRefCom';
// import ClassComp from './ClassComp';

function App() {

  const [formData, setFormData ] = useState({});
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100)

  let modalOpen = useRef(null);

  const memoCall = useMemo(() => {
        console.log("count call");
        return count;
    },[count]);

  
    const countFun = () => {
        console.log("count call");
        return count;
    }

    const myModal = () => {
        modalOpen.current.value = 1234;
    }

  return (
    <div className="App">
      <h2>{memoCall}</h2>
      <button onClick={() => setCount(count+1)}>Count</button>
      <h2 className='color'>{data}</h2>
      <button onClick={() => setData(data+1)}>Data</button><br/><br/>
      <ForwordRefCom ref={modalOpen}/>
      <button onClick={myModal}>Open Modal</button>
    </div>
  );

  
  
}

export default App;
