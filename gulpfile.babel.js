import gulp from 'gulp'
import babel from 'gulp-babel'
import watch from 'gulp-watch'

gulp.task('default', () => {
	return gulp.src('src/**/*.js')
		.pipe(watch('src/**/*.js'))
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('dist'));
})
