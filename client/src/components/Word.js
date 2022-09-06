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
    <div>
      <h3 id='wotd'>{word}</h3>
    </div>
  )
}

export default Word;