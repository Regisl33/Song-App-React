import React from 'react';

const Home = ({ selectedRange, setSelectedRange}) => {

  return (
    <header>
      <h1>Arc-En-Ciel</h1>
      <label htmlFor="songRange">{selectedRange}</label>
      <input
        className="songRange" 
        id="songRange" 
        type="range" 
        min={1} 
        max={15} 
        value={selectedRange} 
        onChange={(e) => setSelectedRange(e.target.value)}
      />

    </header>
  );
};

export default Home;