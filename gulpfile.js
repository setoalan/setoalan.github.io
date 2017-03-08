const gulp = require('gulp'),
  del = require('del'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish'),
  usemin = require('gulp-usemin'),
  minifycss = require('gulp-minify-css'),
  rev = require('gulp-rev'),
  autoprefixer = require('gulp-autoprefixer'),
  cleancss = require('gulp-clean-css'),
  uglify = require('gulp-uglify'),
  cache = require('gulp-cache'),
  imagemin = require('gulp-imagemin'),
  foreach = require('gulp-foreach'),
  babel = require('gulp-babel'),
  ngannotate = require('gulp-ng-annotate');

gulp.task('clean', function () {
  del(['assets', 'scripts', 'styles', 'views']);
});

gulp.task('jshint', function () {
  return gulp.src(['./app/scripts/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('usemin', ['jshint'], function () {
  return gulp.src('./app/**/*.html')
    .pipe(foreach(function (stream, file) {
      return stream
        .pipe(usemin({
          css: [minifycss(), rev()],
          js: [babel({presets: ['es2015'], compact: false}), ngannotate(), uglify(), rev()]
        }))
        .pipe(gulp.dest('./'));
    }));
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
