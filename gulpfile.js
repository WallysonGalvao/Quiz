// Carregando o gulp e os plugins através da função `require` do nodejs
var gulp = require('gulp');
var webserver = require('gulp-webserver');

// Subir o servidor e startar o browser
gulp.task('webserver', function() {
    gulp.src('webapp')
        .pipe(webserver({
            port: 8080,
            livereload: true,
            directoryListing: false,
            open: true
        }));
});

gulp.task('default', function() {
    gulp.start('webserver');
});
