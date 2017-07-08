var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var build = require('./build.js');

var path = {
  mainScss: 'src/assets/stylesheets/site.scss',
  scss: 'src/assets/stylesheets/**/*.scss',
  html: 'layouts/**/*.html'
}

function processScss() {
  return gulp.src(path.mainScss)
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: [ './src/assets/stylesheets' ],
      outputStyle: 'compressed'
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/assets/'))
};

gulp.task('sass', processScss);

// Start server and watch for scss/html-changes
gulp.task('serve', [], function() {
  build(() => {
    processScss();

    browserSync.init({
      server: "./public"
    });

    gulp.watch(path.scss, ['sass']);
    gulp.watch(path.html).on('change', () => build(() => {
      processScss();
      browserSync.reload()
    }));
  });

});

gulp.task('default', ['serve']);
