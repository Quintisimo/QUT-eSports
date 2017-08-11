var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var harp = require('harp');

// Starts harp server and browserSync server
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

// When a change is made to a file the browser automatically reloads
gulp.task('watch', function () {
  gulp.watch("public/*.jade", browserSync.reload);
  gulp.watch("sass/*.sass", browserSync.reload);
  gulp.watch("public/css/*.sass", browserSync.reload);
  gulp.watch("public/js/*.js", browserSync.reload);
  gulp.watch("*.json", browserSync.reload);
});

// Starts both gulp tasks
gulp.task('default', ['serve', 'watch']);
