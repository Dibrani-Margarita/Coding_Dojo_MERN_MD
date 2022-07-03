import './App.css';

function tossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeadsAsync() {
  let headsCount = 0;
  let attempts = 0;

  return new Promise((resolve, reject) => {
    while(headsCount < 5) {
      attempts++;
      let result = tossCoin();
      if(result === "heads") {
        resolve( console.log(`${result} was flipped`));
        headsCount++;
      } else {
        console.log(`${result} was flipped`);
        headsCount = 0;
      }
      if(attempts > 100) {
        reject(console.log(`coin was flipped ${attempts} times`));
      }
    }
    return `It took ${attempts} tries to flip five "heads"`;
  });
}


function App() {
  console.log( fiveHeadsAsync()
    .then( res => console.log(res) )
    .catch( err => console.log(err) )
  );
  console.log( "This is run after the fiveHeadsAsync function completes" );
}


export default App;
