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
  gulp.watch("public/*.jade", browserSync.reload);
  gulp.watch("sass/*.sass", browserSync.reload);
  gulp.watch("public/css/*.sass", browserSync.reload);
  gulp.watch("public/js/*.js", browserSync.reload);
  gulp.watch("*.json", browserSync.reload);
});

gulp.task('default', ['serve', 'watch']);
