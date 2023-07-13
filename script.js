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
