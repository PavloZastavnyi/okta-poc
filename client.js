const okta = require('@okta/okta-sdk-nodejs');

const { ORG_URL, TOKEN } = process.env;

module.exports = new okta.Client({
  orgUrl: ORG_URL,
  token: TOKEN,
});
