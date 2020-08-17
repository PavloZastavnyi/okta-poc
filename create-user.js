const client = require('./client');

module.exports = function (firstName, lastName, email, login) {
  const newUser = {
    profile: {
      firstName, lastName, email, login,
    },
  };

  client.createUser(newUser)
    .then((user) => {
      console.log('User created', user);
    }).catch((error) => {
      console.error('Error', error);
    });
};
