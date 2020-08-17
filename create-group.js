const client = require('./client');

module.exports = function (name) {
  const newGroup = {
    profile: {
      name,
    },
  };

  client.createGroup(newGroup)
    .then((group) => {
      console.log('Group created', group);
    }).catch((error) => {
      console.error('Error', error);
    });
};
