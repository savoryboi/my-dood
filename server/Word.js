const words = [];

setInterval(function() {
  // Set interval for checking
  var date = new Date(); // Create a Date object to find out what time it is
  if (date.getHours() === 8 && date.getMinutes() === 0) {
    words.slice(0, 1);
  }
}, 60000); // Repeat every 60000 milliseconds (1 minute)
