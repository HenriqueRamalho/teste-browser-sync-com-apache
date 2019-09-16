// gulpfile.js

var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('server', function() {
    browserSync.init({
        open: 'external',
        host: 'teste-browser-sync.dev.local',
        proxy: 'teste-browser-sync.dev.local',
        port: 8080 // for work mamp
    });

    gulp.watch('src/**/*').on('change', browserSync.reload);
 
});
