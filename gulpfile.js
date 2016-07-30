var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite')
    browserSync = require('browser-sync').create();

var paths = {
  src: {
     svg: './assets/icons/**/*.svg'
  },
  dest: './dist/'
};

gulp.task('build', function(){
   gulp.src(paths.src.svg)
       .pipe(svgSprite({
           mode: {
               symbol: { // symbol mode to build the SVG
                   render: {
                       css: false, // CSS output option for icon sizing
                       scss: false // SCSS output option for icon sizing
                   },
                   dest: 'icons', // destination folder
                   prefix: '.svg-%s',
                   sprite: 'sprite.svg', //generated sprite name
                   example: true // Build a sample page, please!
               }
           }
       }))
       .pipe(gulp.dest(paths.dest));
});

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['build', 'serve']);