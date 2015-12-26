var gulp = require('gulp');
var gulpFilter = require('gulp-filter');
var concat = require('gulp-concat');
var mainBowerFiles = require('gulp-main-bower-files');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var minifyCss = require('gulp-minify-css');

gulp.task('libs', function () {
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles('**/*.js'))
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/libs'))
        .pipe(connect.reload());
});

gulp.task('minify-css', function() {
    return gulp.src('./app/**/*.css')
        .pipe(minifyCss())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(connect.reload());
});

gulp.task('browserify', function() {
    return browserify('./app/js/app.js', {debug:true})
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(connect.reload());
});

gulp.task('templates', function() {
    return gulp.src('./app/**/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});

gulp.task('images', function() {
    return gulp.src('./app/**/*.jpg')
        .pipe(gulp.dest('dist'));
});

gulp.task('icons', function() {
    return gulp.src('./app/bower_components/bootstrap/fonts/**.*')
        .pipe(gulp.dest('./dist/css/fonts'));
});

gulp.task('watch', function() {
    gulp.watch('bower.json', ['libs']);
    gulp.watch('app/**/*.js', ['browserify']);
    gulp.watch('app/**/*.css', ['minify-css']);
    gulp.watch('app/**/*.html', ['templates']);
    gulp.watch('app/**/*.jpg', ['images']);
});

gulp.task('connect', function () {
    connect.server({
        root: 'dist',
        livereload: true
    })
});

gulp.task('default', ['libs', 'browserify', 'minify-css', 'templates', 'icons' ,'images', 'watch', 'connect']);