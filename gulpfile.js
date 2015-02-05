var gulp = require('gulp');
var mocha = require('gulp-mocha');
var jshint = require('gulp-jshint');

gulp.task('test', function () {
    return gulp.src('test/test.js', {read: false})
        .pipe(mocha());
});

gulp.task('lint', function() {
  return gulp.src(['./modules/*.js', './test/*.js', './index.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
