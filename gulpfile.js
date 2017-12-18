const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');

const webpackConfigDev = require('./webpack/webpack.dev.js');
const webpackConfigProd = require('./webpack/webpack.prod.js');

gulp.task('js-dev', (callback) => {
  webpack(webpackConfigDev, (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack:js-dev', err);
    }

    gutil.log('[webpack:js-dev]', stats.toString({
      chunks: false,
      colors: true,
    }));

    callback();
  });
});

gulp.task('js-prod', (callback) => {
  webpack(webpackConfigProd, (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack:js-prod', err);
    }

    gutil.log('[webpack:js-test]', stats.toString({
      chunks: false,
      colors: true,
    }));

    callback();
  });
});

gulp.task('build', ['js-dev']);
gulp.task('build-prod', ['js-prod']);

gulp.task('watch', ['js-dev'], () => {
  gulp.watch(['./src/**/*'], ['js-dev']);
});

gulp.task('default', ['js-dev']);
