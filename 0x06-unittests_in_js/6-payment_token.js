/**
 * Payment token
 * @param {bool} success
 */
function getPaymentTokenFromAPI(success) {
  if (success === true) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
}

module.exports = getPaymentTokenFromAPI;
