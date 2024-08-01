import React, { useState } from 'react';
import Row from './Row';

const Main = ({ selectedRange, songData}) => {
  const [isRandomised, setIsRandmised] = useState(false)
  const [randomizedSong, setRandomizedSong] = useState([])

  const randomize = () => {
    if(selectedRange < songData.length){
      let newArray = []
      while (newArray.length < selectedRange){
        let random = Math.floor(Math.random() * songData.length)
        let newValue = songData[random]
        console.log(newValue)
        if(newArray.length === 0){
          newArray.push(newValue)
        }else{
          let unique = true
          newArray.map((song) => song.index === newValue.index ? unique = false : null)
          unique ? newArray.push(newValue) : console.log(newArray)
        }
      }
      setRandomizedSong(newArray)
      setIsRandmised(true)
    }else{
      alert("There isn't that many song to randomize")
    }

  }

  const randomTable = (
    <table>
      <tbody>
        {randomizedSong &&
          randomizedSong.map((song) => <Row  key={song.index} song={song} />)}
      </tbody>
    </table>
  )

  const randomButton = <button onClick={() => randomize()}>Randomize</button>
  

  return (
    <main>
      {isRandomised ? randomTable : randomButton}
    </main>
  );
};

export default Main;