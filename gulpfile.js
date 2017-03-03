var gulp = require('gulp'),
  del = require('del'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish'),
  usemin = require('gulp-usemin'),
  rev = require('gulp-rev'),
  autoprefixer = require('gulp-autoprefixer'),
  cleancss = require('gulp-clean-css'),
  uglify = require('gulp-uglify'),
  cache = require('gulp-cache'),
  imagemin = require('gulp-imagemin');

gulp.task('clean', function () {
  del(['scripts', 'styles']);
});

gulp.task('jshint', function () {
  return gulp.src(['./app/scripts/index.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('usemin', ['jshint'], function () {
  return gulp.src('./app/index.html')
    .pipe(usemin({
      css: [autoprefixer(), cleancss(), rev()],
      js: [uglify(), rev()]
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('imagemin', function () {
  return del(['assets']), gulp.src('app/assets/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('./assets'));
});

gulp.task('default', ['clean'], function () {
  gulp.start(['usemin', 'imagemin']);
});

gulp.task('watch', function () {
  gulp.watch('./app/**/*', ['default']);
});
