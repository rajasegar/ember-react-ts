module.exports = function addTsxExtensionSupport(parent) {
  if (parent.options['ember-cli-babel']['extensions']) {
    if (!parent.options['ember-cli-babel']['extensions'].includes('ts')) {
      parent.options['ember-cli-babel']['extensions'].push('ts');
    }
    if (!parent.options['ember-cli-babel']['extensions'].includes('tsx')) {
      parent.options['ember-cli-babel']['extensions'].push('tsx');
    }
  } else {
    parent.options['ember-cli-babel']['extensions'] = ['ts', 'tsx'];
  }
};
