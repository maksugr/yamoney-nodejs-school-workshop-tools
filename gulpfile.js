const gulp = require('gulp');
const babel = require('gulp-babel');
const postcss = require('gulp-postcss');
const eslint = require('gulp-eslint');
const minjs = require('gulp-minify');
const stylelint = require('gulp-stylelint');
const csso = require('gulp-csso');

const GULP_BUILD = 'dist/gulp';

const onFilesChange = (event) => {
  // eslint-disable-next-line no-console
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
};

gulp.task('js', () => {
  return gulp.src('src/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(babel())
    .pipe(minjs({
        ext:{
            src:'.js',
            min:'.js'
        },
        noSource: true
      }))
    .pipe(gulp.dest(GULP_BUILD));
});

gulp.task('css', () => {
  return gulp.src('src/*.css')
    .pipe(stylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }))
    .pipe(postcss())
    .pipe(csso())
    .pipe(gulp.dest(GULP_BUILD));
});

gulp.task('watch', () => {
  gulp.watch('src/*.js', ['js']).on('change', (event) => onFilesChange(event));
  gulp.watch('src/*.css', ['css']).on('change', (event) => onFilesChange(event));
});

gulp.task('default', ['js', 'css', 'watch']);

gulp.task('build', ['js', 'css']);
