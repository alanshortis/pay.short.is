const del = require('del'),
      gulp = require('gulp'),
      autoprefixer = require('gulp-autoprefixer'),
      sass = require('gulp-sass'),
      run = require('gulp-run'),
      gutil = require('gulp-util'),
      ftp = require('vinyl-ftp'),
      notifier = require('node-notifier');


const path = {
  "src": {
    "sass": "./src/sass/**/*.scss"
  },
  "dest" : {
    "css": "./css"
  }
};


gulp.task('css', () => {
  return gulp.src(path.src.sass)
    .pipe(sass({outputStyle: 'compressed'})
    .on('error', function(err) {
      sass.logError.call(this, err);
      notifier.notify({
        title: 'Gulp',
        message: 'SASS error'
      });
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest(path.dest.css));
});


gulp.task('clean', () => {
  return del.sync([path.dest.css]);
});


gulp.task('deploy', () => {
  const args = minimist = require('minimist')(process.argv.slice(2));
  const remotePath = '/websites/short.is/pay/';
  const conn = ftp.create({
    host: args.host,
    user: args.user,
    password: args.password,
    log: gutil.log
  });
  const globs = [
    './**/*',
    '!node_modules'
  ];
  gulp.src(globs, {buffer: false, dot: false})
    .pipe(conn.newer(remotePath))
    .pipe(conn.dest(remotePath));
});


gulp.task('watch', () => {
  gulp.watch(path.src.sass, ['css']);
});


gulp.task('default', ['clean', 'css']);
