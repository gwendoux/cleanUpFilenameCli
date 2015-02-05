var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');
var taskListing = require('gulp-task-listing');

gulp.task('test', function () {
    return gulp.src('test/test.js', {read: false})
        .pipe(mocha());
});

gulp.task('lint', function() {
  return gulp.src(['./modules/*.js', './test/*.js', './index.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('help', taskListing.withFilters(null, 'default'));

gulp.task('default', ['help']);
