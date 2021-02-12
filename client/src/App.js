import {useEffect, useState} from 'react';
import './App.css';

const url = (path) => {
  return process.env.NODE_ENV === 'development' ? `http://localhost:9998${path}` : path
}

function App() {
  const [data, setData] = useState("");

  useEffect(()=>{
    fetch(url('/api/'))
    .then(res=>res.json())
    .then(apiData=> setData(apiData.data))
  },[])
  return (
    <div className="App">
      <h2>API Data here:</h2>
  <p>{`${data}`}</p>
    </div>
  );
}

export default App;
