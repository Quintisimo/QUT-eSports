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
  gulp.watch(["includes/jade/*.jade", "public/index.jade", "includes/sass/*.sass", "public/css/*.sass", "public/js/*.js"], browserSync.reload);
});

gulp.task('default', ['serve', 'watch']);
