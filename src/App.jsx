import axios from 'axios';
import React, { useState } from 'react';
import Home from "./Components/Home";
import Main from './Components/Main';

const App = () => {
  const [songData, setSongData] = useState([])
  const [selectedRange, setSelectedRange] = useState(5)

  useState(() => {
    axios.get("http://localhost:3000/Songs").then((res) =>setSongData(res.data))
  }, [])


  return (
    <>
     <Home selectedRange={selectedRange} setSelectedRange={setSelectedRange} />
     <Main selectedRange={selectedRange} songData={songData} />
    </>

  );
};

export default App;
