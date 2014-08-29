Package.describe({
  summary: "Wrapper for npm AWS SDK",
  version: "0.0.1",
  git: "https://github.com/rosh93/meteor-aws-sdk"
});

Npm.depends({
  'aws-sdk': '2.0.15'
});

Package.onUse(function(api) {
  api.add_files(['aws-sdk.js'], 'server');
  api.export('AWS', 'server');
  api.versionsFrom('METEOR@0.9.0');
});
