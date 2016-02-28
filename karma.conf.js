'use strict';

var webpack = require('./webpack.config');

var COVERAGE_DIR = process.env.COVERAGE_DIR || '.';

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      // 'app/**/*.ts',
      'test/**/*.spec.ts'
    ],
    exclude: [],
    preprocessors: {
      // '**/*.ts': 'webpack'
      'test/**/*.spec.ts': ['webpack', 'sourcemap']
    },
    webpack: webpack,
    webpackServer: {
      noInfo: true
    },
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      reporters: [
        // { type: 'html' },
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
