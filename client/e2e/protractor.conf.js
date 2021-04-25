// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  capabilities: {
    'browserName': 'firefox'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/', 
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    'src/features/**/*.feature' // accepts a glob
  ], 
  cucumberOpts: {
    // require step definitions
    require: [
      'src/step-defs/**/*.steps.js' // accepts a glob
    ],
      format: ['progress', 'pretty:output.txt'],
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: StacktraceOption.PRETTY } }));
  }
};