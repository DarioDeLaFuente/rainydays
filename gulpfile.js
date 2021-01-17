(function() {
  'use strict'

  /**
   * Requirements
   */
  var gulp = require('gulp');
  var autoprefixer = require('gulp-autoprefixer');
  var cssmin = require('gulp-cssmin');
  var rename = require('gulp-rename');
  var sass = require('gulp-sass');

  /**
   * Styles
   */
  gulp.task('build', function() {
    return gulp.src('src/scss/main.scss')
      .pipe(sass({
        outputStyle: 'expanded'
      }))
      .on('error', sass.logError)
      .pipe(autoprefixer())
      .pipe(cssmin())
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('assets/css'));
  });

  /**
   * Watch task for development
   */
  gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', ['build']);
  });

  /**
   * Default task
   */
  gulp.task('default', ['build']);
})();
