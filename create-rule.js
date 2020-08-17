const client = require('./client');

module.exports = function (actions, conditions, name, type) {
  const newGroupRule = {
    profile: {
      actions, conditions, name, type,
    },
  };

  client.createGroupRule(newGroupRule)
    .then((groupRule) => {
      console.log('Group rule created', groupRule);
    }).catch((error) => {
      console.error('Error', error);
    });
};
