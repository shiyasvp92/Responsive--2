// Gulpfile
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	prefix = require('gulp-autoprefixer'),
	connect = require('gulp-connect');

var sassSources = ['sass/*.scss'],
	jsSources = ['scripts/js/*.js'],
	htmlSources = ['**/*.html'];

gulp.task('sass', function(){
	gulp.src(sassSources)
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(prefix({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('css'))
	.pipe(concat('style.min.css'))
	.pipe(gulp.dest('css'))
});

gulp.task('js', function() {
	gulp.src(jsSources)
	.pipe(uglify())
	.pipe(concat('script.js'))
	.pipe(gulp.dest('js'))
});

gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  })
});

gulp.task('html-change', function() {
  gulp.src(htmlSources)
  .pipe(connect.reload())
});

gulp.task('css-change', function() {
  gulp.src(sassSources)
  .pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch(jsSources , ['js']);
  gulp.watch(sassSources , ['sass']);
  gulp.watch(htmlSources, ['html-change']);
  gulp.watch(sassSources, ['css-change']);
});

gulp.task('default', ['sass' , 'js' , 'connect' , 'watch']);