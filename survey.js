const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer1) => {
  rl.question("What's an activity you like doing? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer4) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (answer3) => {
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {
              
              console.log(`${answer1} likes to listen to ${answer4} when ${answer2}. ${answer1} favourite meal is ${answer3} and for that meal she/he likes to eat ${answer5}. ${answer1} favourite sport is ${answer6} and superpower is ${answer7}.`)
              
              rl.close();
            })
          });
        });
      });
    });
  });

});