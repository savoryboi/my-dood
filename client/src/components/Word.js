import {useEffect, useState} from 'react';



function Word() {
  const wordsArray = ['apple','forever', 'aracnophobia', 'controller', 'foundation', 'cat', 'ballistic', 'campervan'];
  const [word, setWord] = useState('');
  const now = new Date().getMinutes();

    setInterval(() => {

      if(now === 30) {
       let the_word = wordsArray.shift()
        
       setWord(the_word[0])
        return(
          <div>
            <h3>{word}</h3>
          </div>
        )
      }
      }, 5000)
    }

export default Word;