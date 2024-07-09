const gulp = require ('gulp');
const sass = require ('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require("gulp-uglify")

function script (){
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}

function style(){
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'))
}

function images (){
    return gulp.src('./src/images/**')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

exports.default = gulp.parallel(style, images, script)

exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(style))
    gulp.watch('./src/scripts/*js', gulp.parallel(script))
}