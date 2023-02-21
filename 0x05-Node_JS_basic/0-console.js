/*
 * Prints a string to the standard output
 */
function displayMessage(message) {
  process.stdout.write(`${message}\n`);
}

module.exports = displayMessage;
