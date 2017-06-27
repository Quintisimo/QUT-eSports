var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var harp = require('harp');

gulp.task('serve', function () {
  harp.server('.', {
    port: 9000
  }, function() {
    browserSync.init({
      proxy: "localhost:9000",
      notify: false
    });
  });
});

gulp.task('watch', function () {
  gulp.watch("includes/jade/*.jade", browserSync.reload);
  gulp.watch("public/index.jade", browserSync.reload);
  gulp.watch("includes/sass/*.sass", browserSync.reload);
  gulp.watch("public/css/*.sass", browserSync.reload);
  gulp.watch("public/*.jade", browserSync.reload);
  gulp.watch("public/js/*.js", browserSync.reload);
});

gulp.task('default', ['serve', 'watch']);
