module.exports = function enableTsTransform(parent) {
  parent.options['ember-cli-babel']['enableTypeScriptTransform'] = true;
  parent.options['ember-cli-babel']['useBabelConfig'] = true;
};
