import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import './Style.css';

function App() {

    
    const [count, setCount] = useState(1); 
    const [preState, setPreState] = useState(null);
    const chnageCount = () => {
        setCount((pre)=> {
            setPreState(pre);
            return Math.floor(Math.random(count) * 10)
        });
    }
    return (
        <div className="App">
            <h2>Previous State : {preState && preState}</h2>
            <h2>{count}</h2>
            <button onClick={chnageCount}>Click Me!</button>
        </div>
    );  
  
}

export default App;
