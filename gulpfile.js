var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    mocha = require('gulp-mocha'),
    babel = require('babel/register');

global.expect = require('chai').expect;
global.sinon = require('sinon');

gulp.task('lint', function() {
    return gulp.src(['src/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('test', function() {
    return gulp.src(['src/{,*/}__tests__/*.js'])
            .pipe(mocha({
                compilers: {
                    js: babel
                },
                reporter: 'spec',
                ui: 'bdd'
            }));
});

gulp.task('default', function() {

});
