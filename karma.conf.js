'use strict';

var COVERAGE_DIR = process.env.COVERAGE_DIR || '.';

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['browserify', 'jasmine'],
    files: [
      'app/**/*.ts',
      'test/**/*.spec.ts'
    ],
    exclude: [],
    preprocessors: {
      '**/*.ts': 'browserify'
    },
    browserify: {
      debug: true,
      plugin: ['tsify'],
      transform: ['browserify-istanbul'],
      extensions: ['.ts']
    },
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      reporters: [
        { type: 'json', file: 'original.json' },
        { type: 'text-summary' }
      ],
      dir: COVERAGE_DIR + '/coverage',
      subdir: '.',
      check: {
        global: {
          statements: 50,
          branches: 50,
          functions: 50,
          lines: 50
        }
      }
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome', 'Firefox'],
    singleRun: true,
    concurrency: Infinity
  })
};
