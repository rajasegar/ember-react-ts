'use strict';

const addTsxExtensionSupport = require('./lib/add-tsx-extension-support');
const enableTsTransform = require('./lib/enable-ts-transform');
module.exports = {
  name: require('./package').name,
  included(parent) {
    this._super.included.apply(this, arguments);
    addTsxExtensionSupport(parent);
    enableTsTransform(parent);
  }
};
