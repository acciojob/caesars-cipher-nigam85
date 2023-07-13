const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/main.html'));
});
//your code here
function rot13(str) {
  let decoded = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // Check if the character is a letter
    if (/[A-Z]/.test(char)) {
      // Convert the character code to a value between 0 and 25
      let charCode = char.charCodeAt(0) - 65;

      // Apply the ROT13 shift (add 13 and wrap around if necessary)
      let decodedCharCode = (charCode + 13) % 26;

      // Convert the value back to a character code
      let decodedChar = String.fromCharCode(decodedCharCode + 65);

      // Append the decoded character to the result
      decoded += decodedChar;
    } else {
      // Non-alphabetic character, pass it through unchanged
      decoded += char;
    }
  }

  return decoded;
}

app.post('/add', (req, res) => {
  const {a,b} = req.body;
  res.status(200).send(a+b);
  // res.sendFile(path.join(__dirname + '/main.html'));
});
module.exports = app;