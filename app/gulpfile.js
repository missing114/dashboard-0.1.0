var gulp = require('gulp');
// require other packages
// require other packages
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var stylish = require('jshint-stylish');



var imagemin=require('gulp-imagemin');

gulp.task('styles', function() {
	return gulp.src('./assets/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./assets/styles'))

});
gulp.task('task1' , function(){
		return gulp.src(['./assets/images/src/app/*.jpg','./assets/images/src/app/*.png'])
		.pipe(imagemin())
		.pipe(gulp.dest('./assets/images/build/app'))
	});
gulp.task( 'task2' ,function(){
		return gulp.src('./assets/images/src/profile/*.png')
		.pipe(imagemin())
		.pipe(gulp.dest('./assets/images/build/profile'))
	});
gulp.task('task3', function(){
		return gulp.src('./assets/images/src/work/*.jpg')
		.pipe(imagemin())
		.pipe(gulp.dest('./assets/images/build/work'))
	});
gulp.task('clean1',function(){
	return gulp.src('./assets/styles/*.css', {read: false})
    .pipe(clean());

});
gulp.task('clean2',function(){
	return gulp.src('./assets/images/build/app/*', {read: false})
    .pipe(clean());

});
gulp.task('clean3',function(){
	return gulp.src('./assets/images/build/profile/*', {read: false})
    .pipe(clean());

});
gulp.task('clean4',function(){
return gulp.src('./assets/images/build/work/*', {read: false})
    .pipe(clean());
});

gulp.task('jshint', function() {
  return gulp.src('./scripts/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
	
gulp.task('imagemin',['task1','task2','task3']);

gulp.task('clean',['clean1','clean2','clean3']);