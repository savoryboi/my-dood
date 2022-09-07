import { useEffect, useState } from 'react';

const wordsArray = ['apple', 'forever', 'arachnophobia', 'controller', 'foundation', 'cat', 'ballistic', 'campervan'];


function Word() {
  const [word, setWord] = useState('pumpkins');


  useEffect(() => {
    const interval = setInterval(() => {
      if (wordsArray) {
        let todayWord = wordsArray.shift()
        setWord(todayWord)
        console.log(word);
      }
    }, 1000 * 60 * 60 * 24)



    return () => clearInterval(interval)
  })

  return (
    <div id="wotd-wrapper">
      <div className="lil-wotd-container">
        <div><h3>WOTD: </h3></div>
        <div id='wotd'> {word}</div>
      </div>
    </div>
  )
}

export default Word;