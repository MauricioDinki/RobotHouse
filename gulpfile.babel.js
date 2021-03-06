import gulp from 'gulp'
import babel from 'gulp-babel'
import watch from 'gulp-watch'
import uglify from "gulp-uglify"
import stylus from 'gulp-stylus'
import nib from 'nib'

const paths = {
  helpers: 'helpers/**/*.js',
  models: 'models/**/*.js',
	routes: 'routes/**/*.js',
	views: 'views/**/*',
	server: 'server.js',
  styl: 'public/styl/**/*.styl',
}

gulp.task('helpers', () => {
  return gulp.src(paths.helpers)
		.pipe(watch(paths.helpers))
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/helpers'));
})

gulp.task('models', () => {
  return gulp.src(paths.models)
		.pipe(watch(paths.models))
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/models'));
})

gulp.task('routes', () => {
  return gulp.src(paths.routes)
		.pipe(watch(paths.routes))
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/routes'));
})

gulp.task('server', () => {
  return gulp.src(paths.server)
		.pipe(watch(paths.server))
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
})

gulp.task('views', () => {
  return gulp.src(paths.views)
		.pipe(watch(paths.views))
		.pipe(gulp.dest('dist/views'));
})

gulp.task('css', () => {
  return gulp.src(paths.styl)
    .pipe(watch(paths.styl))
    .pipe(stylus({
      'compress': true,
      'use': nib()
    }))
    .pipe(gulp.dest('public/css/build'));
})

gulp.task('default', ['helpers', 'models', 'routes', 'server', 'views', 'css'])
