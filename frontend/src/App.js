import './App.css';
import axios from 'axios';
import React from 'react';

function App() {
  const [data, setData] = React.useState(['...']);

  const getMessage = async () => {
    const response = await axios.get('http://localhost:3000/api/v1/temp');
    setData(response.data.message);
    console.log(response.data.message);
  };

  const handleClick = () => {
    getMessage();
  };

  return (
    <div className="App">
      <h1>Front end</h1>
      <button onClick={handleClick}>click</button>
      <p>Message from backend</p>
      <p>{data}</p>
    </div>
  );
}

export default App;
