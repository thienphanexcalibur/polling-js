/**
 * polling-js
 * @param {Promise} request
 * @param {Function<data>} condition
 * @param {Object} options
 * @return {Promise}
 */
module.exports = async function polling (request, condition, options = {
  intitialTimeout: 3000,
  incrementTimeout: 1000
}) {
  const {intitialTimeout, incrementTimeout} = options;
  let timeout = intitialTimeout;
  return new Promise((resolve, reject) => setTimeout(async () => {
    try {
      const data = await request();
      if (condition(data)) {
        resolve(data);
      } else {
        timeout = intitialTimeout + incrementTimeout;
        console.log('Wait', timeout);
        resolve(polling(request, condition, {...options, intitialTimeout: timeout, incrementTimeout: incrementTimeout}));
      }
    } catch(e) {
      reject(e);
    }
  }, timeout));
}

