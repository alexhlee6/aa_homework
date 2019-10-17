const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.question("Would you like tea?", function (answer) {
  console.log(`${answer}`);
  
  reader.question("Would you like biscuits?", function (answer2) {
    if (answer === "yes") {
      answer = "do";
    } else if (answer === "no") {
      answer = "don't";
    } 

    if (answer2 === "yes") {
      answer2 = "do";
    } else if (answer2 === "no") {
      answer2 = "don't";
    }

    console.log(`So you ${answer} want tea and you ${answer2} want coffee.`);
    reader.close();
  });
})


