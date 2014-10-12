'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('jshint', function(callback) {
  var s = gulp.src(['lib/*.js', '*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'));
  return callback(null);
});

// The default task (called when you run `gulp`)
gulp.task('default', ['jshint']);
