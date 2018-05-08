const gulp = require('gulp');
const webserver = require('gulp-webserver');
const rename = require('gulp-rename');
const ejs = require('gulp-ejs');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const htmlprettify = require('gulp-html-prettify');
const config = require('./config');

gulp.task('webserver', function(){
  gulp.src('./dist')
  .pipe(webserver({
    open: true,
    port: 8889
  }));
});

gulp.task('ejs', () => {
  gulp.src(config.ejs.path.exec)
  .pipe(ejs({}, {}, { ext: '.html' }))
  .on('error', swallowError)
  .pipe(htmlprettify({indent_char: ' ', indent_size: 2}))
  .pipe(gulp.dest("./dist"));
});

gulp.task('scss', () => {
  gulp.src(config.scss.path)
  .pipe(sass().on('error', sass.logError))
  .on('error', swallowError)
  .pipe(rename(function (path) {
    path.extname = '.css';
  }))
  .on('error', swallowError)
  .pipe(gulp.dest('./dist/static/css'));
});

gulp.task('scss:prod', () => {
  gulp.src(config.scss.path)
  .pipe(sass().on('error', sass.logError))
  .on('error', swallowError)
  .pipe(rename(function (path) {
    path.extname = '.css';
  }))
  .on('error', swallowError)
  .pipe(gulp.dest('./dist/static/css'));
});

gulp.task('default', ['webserver', 'ejs'], () => {
  gulp.watch(config.ejs.path.watch, ['ejs']);
  // gulp.watch(config.scss.path, ['scss']);
});

gulp.task('build', ['ejs']);

/**
* swallowError - 에러 핸들링 (https://stackoverflow.com/questions/23971388/prevent-errors-from-breaking-crashing-gulp-watch)
*
* @param  {obejct} error
*/
function swallowError (error) {
  console.log(error.toString());
}
