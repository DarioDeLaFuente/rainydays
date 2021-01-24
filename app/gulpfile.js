(function() {
  'use strict'

  /**
   * Requirements
   */
  var gulp = require('gulp');
  var autoprefixer = require('gulp-autoprefixer');
  var cssmin = require('gulp-cssmin');
  var rename = require('gulp-rename');
  var cleanCss = require('gulp-clean-css')
  var sass = require('gulp-sass');

  var paths = {
    sass: ['./src/scss/**/*.scss']
  };
  
  gulp.task('sass', function(done) {
    gulp.src('./src/scss/*.scss')
      .pipe(sass())
      .on('error', sass.logError)
      .pipe(gulp.dest('./assets/css/'))
      .pipe(autoprefixer())
      .pipe(cleanCss({
        keepSpecialComments: 0
      }))
      .pipe(rename({extname: '.min.css'}))
      .pipe(gulp.dest('./assets/css/'))
      .on('end', done);
  });
  
  gulp.task('watch', function () {
    gulp.watch(paths.sass, gulp.series('sass'));
  });

  gulp.task('build', gulp.series('sass'));

})();
