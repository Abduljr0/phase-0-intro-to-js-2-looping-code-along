function writeCards(names) {
    
    let thankYouMessages = [];
  
    
    for (let i = 0; i < names.length; i++) {
      
      let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
      thankYouMessages.push(message);
    }
  
    
    return thankYouMessages;
  }
 
function countDown() {
    let countDown=10;
    while (countDown>-1){
        console.log (countDown--)
    }
    return countDown;
}