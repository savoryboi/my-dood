import {useEffect} from 'react';

function Word() {
  const words = ['apple','forever', 'aracnophobia', 'controller', 'foundation', 'cat', 'ballistic', 'campervan'];
  
  setInterval(function() {
    // Set interval for checking
    var date = new Date(); // Create a Date object to find out what time it is
    console.log(date.getMinutes())
    if (date.getMinutes() === 44) {
      words.shift()
      return words;
    }
    console.log(words[0])
  }, 6000); // Repeat every 60000 milliseconds (1 minute)

  return (
    <div>
      <h3>{words[0]}</h3>

    </div>
    )
  
}

export default Word;