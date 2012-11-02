/*global module:false*/
module.exports = function(grunt) {
  'use strict';

  var browserifyConfig = {
    entries: ['index.js'],
    options: {
      exports: ['require'],
      require: {
        net: 'net-browserify',
        freelist: './lib/freelist',
        string_decoder: './lib/string_decoder',
        http_parser: './lib/http_parser'
      }
    }
  };

  // Project configuration.
  grunt.initConfig({
    lint: {
      files: ['grunt.js', 'lib/**/*.js', 'test/**/*.js']
    },
    test: {
      files: ['test/**/*.js']
    },
    browserify: {
      "dist/bundle.js": browserifyConfig,
      "example/plugin/chromenode.js": browserifyConfig
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint test'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true
      },
      globals: {}
    }
  });

  grunt.loadNpmTasks('grunt-browserify');

  // Default task.
  grunt.registerTask('default', 'browserify');

};
