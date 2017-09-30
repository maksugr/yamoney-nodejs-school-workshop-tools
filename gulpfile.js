const gulp = require('gulp');
const babel = require('gulp-babel');
const postcss = require('gulp-postcss');
const eslint = require('gulp-eslint');
const stylelint = require('gulp-stylelint');

const inject = require('gulp-inject');
const runSeq = require('gulp-sequence');
const dist = 'dist';

const onFilesChange = (event) => {
  // eslint-disable-next-line no-console
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
};

gulp.task('_js', () => {
  return gulp.src('src/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(babel())
    .pipe(gulp.dest(dist));
});

gulp.task('_css', () => {
  return gulp.src('src/*.css')
    .pipe(stylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }))
    .pipe(postcss())
    .pipe(gulp.dest(dist));
});

gulp.task('index', () => {
	var 
		template = gulp.src('src/index.html'),
		source = gulp.src([dist + '/**/*.js', dist + '/**/*.css'], {read: false});
	return template.pipe(inject(source)).pipe(gulp.dest(dist));
});

gulp.task('css', runSeq('_css', 'index'));
gulp.task('js', runSeq('_js', 'index'));

gulp.task('watch', () => {
  gulp.watch('src/*.js', ['js']).on('change', (event) => onFilesChange(event));
  gulp.watch('src/*.css', ['css']).on('change', (event) => onFilesChange(event));
});

gulp.task('default', runSeq(['_js', '_css'], 'index', 'watch'));
