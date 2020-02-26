
// gulp version 4.0.2
// you need .babelrc => "presets": ["@babel/preset-env"]

const 
  gulp = require('gulp'),
  { src, dest } = require('gulp'),
  browsersync   = require('browser-sync').create(),
  cache = require('gulp-cache'),
  babel = require('gulp-babel'),
  uglify = require('gulp-uglify'),
  stylus = require('gulp-stylus'),
  pug = require('gulp-pug');

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./"
    },
    port: 3000,
    notify: false
  });
  done();
}

function reload(done) {
  browserSync.reload();
  done();
}


function clear() {
  return cache.clearAll();
}

function javascript() {
  return src('src/js/**/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(dest('dist/js'))
    .pipe(browsersync.stream());
}

function css() {
  return src('src/stylus/**/*.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(dest('dist/css'))
    .pipe(browsersync.stream());
}

function html() {
  return src('src/pug/**/*.pug')
    .pipe(pug())
    .pipe(dest('./'))
    .pipe(browsersync.stream());
}

function watchFiles(done) {
  gulp.watch('src/stylus/**/*.styl', gulp.parallel(css));
  gulp.watch("src/pug/**/*.pug", gulp.parallel(html));
  gulp.watch('src/js/**/*.js', gulp.parallel(javascript));
  done();
}

const watch = gulp.parallel(watchFiles, browserSync);


exports.clear = clear;
exports.watch = watch;