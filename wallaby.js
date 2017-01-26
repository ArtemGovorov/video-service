var wallabyWebpack = require('wallaby-webpack');
var webpackPostprocessor = wallabyWebpack({
  entryPatterns: [
    'app/setup.js',
    'test/**/*.spec.js'
  ]
});

module.exports = function (wallaby) {

  return {
    files: [
      {pattern: 'app/**/*.ts', load: false}
    ],

    tests: [
      {pattern: 'test/**/*.spec.ts', load: false}
    ],

    testFramework: 'jasmine',

    postprocessor: webpackPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests();
    },

    debug: true
  };
};