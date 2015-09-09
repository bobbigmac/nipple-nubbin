Package.describe({
  name: 'bobbigmac:nipple-nubbin',
  version: '0.3.1',
  // Brief, one-line summary of the package.
  summary: 'Wraps nipplejs: A virtual joystick for touch capable interfaces.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/bobbigmac/nipple-nubbin',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "nipplejs": "0.3.1"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');

  api.addFiles('.npm/package/node_modules/nipplejs/dist/nipplejs.min.js', ['client']);
  api.addFiles('nipple-nubbin.js', ['client']);
  api.export("Nipple", ['client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('bobbigmac:nipple-nubbin');
  api.addFiles('nipple-nubbin-tests.js', 'client');
});
