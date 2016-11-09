const gulp = require('gulp');
const ts = require('gulp-typescript');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require('tsify');

const tsProject = ts.createProject('tsconfig.json');

gulp.task("copy-html", () => {
    return gulp.src('src/**/*.html')
    .pipe(gulp.dest('_dist'));
})

gulp.task('default', ['copy-html'], () => {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/app.ts', 'src/storage.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest("_dist"));
})