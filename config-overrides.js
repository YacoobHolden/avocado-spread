const rewireMobX = require('react-app-rewire-mobx');
const rewirePolyfills = require('react-app-rewire-polyfills');
const rewireSass = require('./rewire/react-app-rewire-sass');
const rewireCSS = require('./rewire/react-app-rewire-css-scss');
const rewireAppIndexEntry = require('./rewire/react-app-rewire-app-index-entry');

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireMobX(config, env);
  config = rewireCSS(config, env);
  config = rewireSass(config, env);
  config = rewireAppIndexEntry(config, env);
  if (env !== 'local') {
    config = rewirePolyfills(config, env);
  }
  return config;
};
