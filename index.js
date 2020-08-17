require('dotenv').config();

const createGroup = require('./create-group');
const createUser = require('./create-user');
const createRule = require('./create-rule');

createGroup('3f849de21b6ad8943215a9fbbc4bcb97');

/* createUser(
  'Pavlo',
  'Zastavnyi',
  'pavlo.zastavnyi@gmail.com',
  'pavlo.zastavnyi@gmail.com',
); */

// createRule('3f849de21b6ad8943215a9fbbc4bcb97');
