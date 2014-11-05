Package.describe({
  summary: "Enable server-side reactivity for Meteor.publish"
});

Package.onUse(function(api) {
  api.use([
    'coffeescript',
    'underscore',
    'server-deps',
    'accounts-base'
  ], 'server');

  api.add_files('lib/reactive-publish.coffee', 'server');
});
