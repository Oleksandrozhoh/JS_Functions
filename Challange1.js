'use strict';

// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1.
// Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2.
// Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = prompt(`${this.question}\n ${this.options.join('\n')}`);
    console.log(typeof answer);
    const answerNum = answer ?? Number(answer);
    console.log(answerNum);
    answerNum >= 0 && answerNum <= 3
      ? poll.answers[answerNum]++
      : alert('answer is not valid!');
    // console.log(poll.answers);
    displayResultsForPoll(`string`);
  },
};

const displayResults = function (type = 'array') {
  if (type === 'array') {
    console.log(this.answers);
  } else if (type === 'string') {
    let output = `Poll results are `;
    for (const element of this.answers) {
      output += element + ' ';
    }
    console.log(output);
  }
};

const answers = [1, 5, 3, 9, 6, 1];
displayResults.call({ answers }, 'string');
displayResults.call({ answers });

const displayResultsForPoll = displayResults.bind(poll);

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

(function () {
  console.log('This is my function that will be executed only once');
})();

(() =>
  console.log('This is my arrow function that will be executed only once'))();

/// closure

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const bookTheTicket = secureBooking();
bookTheTicket();
bookTheTicket();
bookTheTicket();
bookTheTicket();
