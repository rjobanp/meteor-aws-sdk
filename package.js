Package.describe({
  summary: "Wrapper for npm AWS SDK",
  version: "0.0.2",
  git: "https://github.com/rosh93/meteor-aws-sdk"
});

Npm.depends({
  'aws-sdk': '2.1.4'
});

Package.onUse(function(api) {
  api.add_files(['aws-sdk.js'], 'server');
  api.export('AWS', 'server');
});
