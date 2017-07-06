var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', [], function() {

  browserSync.init({
    server: "./public"
  });

  gulp.watch("public/**/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
