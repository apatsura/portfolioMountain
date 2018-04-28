'use strict';

const gulp = require('gulp');
const pug = require('gulp-pug');
const del = require('del');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();

// styles
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

// images
const imagemin = require('gulp-imagemin');

// svg
const svgSprite = require('gulp-svg-sprite');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const spriteConfig = require('./sprite.config.js');

// webpack
const gulpWebpack = require('gulp-webpack'); // v2
const webpack = require('webpack'); // v3
const webpackConfig = require('./webpack.config.js');

const paths = {
  root: './build',
  templates: {
    pages: 'src/templates/pages/*.pug',
    src: 'src/templates/**/*.pug',
    dest: 'build/assets/'
  },
  fonts: {
    src: 'src/fonts/**/*.*',
    dest: 'build/assets/fonts/'
  },
  styles: {
    src: 'src/styles/**/*.scss',
    dest: 'build/assets/styles/'
  },
  images: {
    src: 'src/images/**/*.{jpg,jpeg,png}',
    dest: 'build/assets/images/'
  },
  sprites: {
    src: 'src/images/sprites/*.svg',
    dest: 'build/assets/images/sprites/'
  },
  scripts: {
    src: 'src/scripts/**/*.js',
    dest: 'build/assets/scripts/'
  }
}

// pug
function templates() {
  return gulp.src(paths.templates.pages)
  .pipe(plumber({
    errorHandler: notify.onError(function(error) {
      return {
        title: 'HTML',
        message: error.message
      };
    })
  }))
  .pipe(pug({ pretty: true }))
  .pipe(gulp.dest(paths.root));
}

// fonts
function fonts() {
  return gulp.src(paths.fonts.src)
  .pipe(gulp.dest(paths.fonts.dest));
}

// style scss
function styles() {
  return gulp.src(paths.styles.src)
  .pipe(plumber({
    errorHandler: notify.onError(function(error) {
      return {
        title: 'Styles',
        message: error.message
      };
    })
  }))
  .pipe(sass({
    includePaths: require('node-normalize-scss').includePaths
  }))
  .pipe(sourcemaps.init())
  .pipe(autoprefixer())
  .pipe(sass({ outputStyle: 'compressed' }))
  .pipe(sourcemaps.write())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest(paths.styles.dest));
}

// images
function images() {
  return gulp.src(paths.images.src,) // {since: gulp.lastRun('images')})
  // .pipe(imagemin([
  //   imagemin.gifsicle({interlaced: true}),
  //   imagemin.jpegtran({progressive: true}),
  //   imagemin.optipng({optimizationLevel: 5}),
  //   imagemin.svgo({
  //       plugins: [
  //           {removeViewBox: true},
  //           {cleanupIDs: false}
  //       ]
  //   })
  // ]))
  .pipe(gulp.dest(paths.images.dest));
}

// svg
function sprites() {
  return gulp.src(paths.sprites.src)
    .pipe(plumber({
      errorHandler: notify.onError(function(error) {
        return {
          title: 'Sprites',
          message: error.message
        };
      })
    }))
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe(cheerio({
      run: function($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
      },
      parserOptions: {
        xmlMode: true
      }
    }))
    // .pipe(replace('&gt;', '>'))
    .pipe(svgSprite(spriteConfig, svgSprite))
    .pipe(gulp.dest(paths.sprites.dest));
}

// clean
function clean() {
  return del(paths.root)
}

// webpack
function scripts() {
  return gulp.src(paths.scripts.src)
  .pipe(plumber({
    errorHandler: notify.onError(function(error) {
      return {
        title: 'Scripts',
        message: error.message
      };
    })
  }))
  .pipe(gulpWebpack(webpackConfig, webpack))
  .pipe(gulp.dest(paths.scripts.dest));
}

// watch src
function watch() {
  gulp.watch(paths.fonts.src, fonts);
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.templates.src, templates);
  gulp.watch(paths.images.src, images);
  gulp.watch(paths.sprites.src, sprites);
  gulp.watch(paths.scripts.src, scripts);
}

// watch bulid & livereload
function server() {
  browserSync.init({
    server: paths.root
  });
  browserSync.watch(paths.root + '/**/*.*', browserSync.reload);
}

exports.templates = templates;
exports.fonts = fonts;
exports.styles = styles;
exports.clean = clean;
exports.images = images;
exports.sprites = sprites;
exports.scripts = scripts;
exports.watch = watch;
exports.server = server;

gulp.task('default', gulp.series(
  gulp.parallel(fonts, styles, templates, images, sprites, scripts),
  gulp.parallel(watch, server)
));

gulp.task('build', gulp.series(
  clean,
  gulp.parallel(styles, templates, scripts, images, sprites)
));