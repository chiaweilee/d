/* eslint-disable no-console */

export default {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};
