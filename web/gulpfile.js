var config = require('./gulp.config.js')();
var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');
var rename = require("gulp-rename");
var gutil = require('gulp-util');
var liveReload = require('gulp-server-livereload');
var less = require('gulp-less');
var del = require('del');
var series = require('stream-series');
var jshint = require('gulp-jshint');
var jshintStylish = require('jshint-stylish');

// TODO: Add bundling / minify js & css...  browserify & babel?

gulp.task('serve', ['inject', 'less-watcher', 'fonts-debug'], function(){
    return gulp.src('')
        .pipe(liveReload({
          directoryListing: false,
          open: true,
          port: 1010,
          defaultFile: 'index.html',
          livereload: {
            enable: true,
            filter: function (filename, cb) {
                cb(!/\.(sa|le)ss$|node_modules/.test(filename));
            }
          },
        }));
});

gulp.task('inject', ['wiredep', 'less-styles'], function(){
    log('Injecting CSS');

    return gulp.src(config.index)
        .pipe(inject(gulp.src(config.css, {read: false})))
        .pipe(gulp.dest('./'));
});

gulp.task('wiredep', function(){
    log('Wiring up bower and injecting application');

    var appJs = gulp.src(config.appJs, {read:false});
    var modules = gulp.src(config.jsModules, {read: false});
    var otherJs = gulp.src(config.normalJs, {read: false});

    return gulp.src(config.templateIndex)
        .pipe(wiredep({}))
        .pipe(inject(series(appJs, modules, otherJs)))
        .pipe(rename(config.index))
        .pipe(gulp.dest('./'));
});

gulp.task('fonts-debug', function() {
    log('Copying fonts');

    return gulp
        .src(config.fonts)
        .pipe(gulp.dest(config.tmp + 'fonts'));
});

gulp.task('less-watcher', function() {
    gulp.watch([config.less], ['less-styles']);
});

gulp.task('less-styles', function() {
    log('Compiling less ---> CSS');

    return gulp.src(config.less)
        .pipe(less())
        .pipe(gulp.dest(config.tmp));
});

gulp.task('jshint', function(){
    log('performing jshint on js files');

    return gulp.src(config.allJs)
        .pipe(jshint())
        .pipe(jshint.reporter(jshintStylish))
        .pipe(jshint.reporter('fail'));
});


gulp.task('clean', function(done){
    return del([config.tmp+'*.*', config.tmp+'fonts/*.*'], done);
});

function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                gutil.log(gutil.colors.blue(msg[item]));
            }
        }
    } else {
        gutil.log(gutil.colors.blue(msg));
    }
}
