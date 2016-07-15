const gulp = require('gulp')
const rename = require('gulp-rename')
const concat = require('gulp-concat')

const buffer = require('vinyl-buffer')
const source = require('vinyl-source-stream')
const rollup = require('rollup-stream')
const rollupBabel = require('rollup-plugin-babel')

const babel = require('gulp-babel')
const uglify = require('gulp-uglify')

const jade = require('gulp-pug')
const less = require('gulp-less')
const templateToJs = require('gulp-html-to-es-module')

gulp.task('rollup', () =>
  rollup({
    entry: 'src/adicom-vue-components.js',
    plugins: [rollupBabel({ presets: 'es2015-rollup' })]
  })
    .pipe(source('adicom-vue-components.js'))
    .pipe(buffer())
    .pipe(babel({
      plugins: ["transform-es2015-modules-umd"],
      presets: ["es2015"],
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(uglify())
    .pipe(rename({ extname: ".min.js" }))
    .pipe(gulp.dest('dist/'))
)

gulp.task('less', () =>
  gulp
    .src('src/**/*.less')
    .pipe(less())
    .pipe(concat('adicom-vue-components.css'))
    .pipe(gulp.dest('dist/'))
)


gulp.task('jade', () =>
  gulp
    .src('src/**/*.jade')
    .pipe(jade())
    .pipe(templateToJs())
    .pipe(gulp.dest('src/'))
)

var sequence = require('run-sequence')

gulp.task('default', cb => sequence('less', 'jade', 'rollup', cb))