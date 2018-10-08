let gulp = require('gulp');
let $ = require('gulp-load-plugins')();
let autoprefixer = require('autoprefixer');

gulp.task('jade', function() {
    
    gulp.src('./source/**/*.jade')
    .pipe($.plumber())
    .pipe($.jade({
        pretty: true
    }))
    .pipe(gulp.dest('./public/'))
});

gulp.task('sass', function () {
    let plugins = [
        autoprefixer({browsers: ['last 3 version','> 5%']}),
    ];
    return gulp.src('./source/scss/**/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass().on('error', $.sass.logError))
    //編譯完成
    .pipe($.postcss(plugins))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('babel', () =>
    gulp.src('./source/js/**/*.js')
        .pipe($.sourcemaps.init())
        .pipe($.babel({
            presets: ['env']
        }))
        .pipe($.concat('all.js'))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('./public/js'))
);


gulp.task('watch', function () {
    gulp.watch('./source/scss/**/*.scss', ['sass']);
    gulp.watch('./source/**/*.jade', ['jade']);
    gulp.watch('./source/js/**/*.js', ['babel']);
});

gulp.task('default',['jade','sass','babel','watch']);