
var gulp		= require('gulp'),    
	browserify	= require('browserify'),     
	uglify		= require('gulp-uglify'),     
	sass		= require('gulp-sass'),    
	source		= require('vinyl-source-stream'),   
	buffer		= require('vinyl-buffer'),
    install		= require("gulp-install"),
    watchpkg	= require('gulp-watch'),
    exec		= require('child_process').exec,
	runSequence = require('run-sequence'),
    path =   {
                sass:       './resources/sass',
                pkg:        './package.json',
                bowerSrc:   './bower.json',
                bowerDir:   './UAT/public',
                brw5Src:    './Public/Scripts/app.js',
                bowerrc:    './bower.bowerrc',
		        brw5Dest:   './UAT/public/Scripts',
				cssDest:	'./UAT/public/css'
            },
    watch =  {
		        jsfiles:	'./UAT/**/*.js',
	            cssfiles:	'./UAT/**/*.css'
	         };


gulp.task('pkgs', function () {
    
  return  gulp.src(path.pkg)
			.pipe(install());

});

gulp.task('sass', function () {

  return  gulp.src('./*.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest(path.cssDest));

});

gulp.task('bower', function () {

  return  gulp.src(['./bower.json']).pipe(gulp.dest(path.bowerDir))
			.pipe(install());

});

gulp.task('browser5',function(){

	return browserify(path.brw5Src)
			.bundle()
			.pipe(source('bundle.js'))	// gives streaming vinyl file object
			.pipe(buffer())				// convert from streaming to buffered vinyl file object
			.pipe(uglify())				// now gulp-uglify works 
			.pipe(gulp.dest(path.brw5Dest));

});


gulp.task('nodeFiles',function(){

	return gulp.src('./NodeScripts/*.js')
			   .pipe(gulp.dest('./UAT/NodeScripts')); 
	
});

gulp.task('imageFiles', function () {

    return gulp.src('./public/images/*.*')
			   .pipe(gulp.dest('./UAT/public/Images'));
	
});

gulp.task('htmlFiles', function () {

    return gulp.src('./public/*.html')
			   .pipe(gulp.dest('./UAT/public'));
	
});

gulp.task('mainScript', function () {

    return gulp.src('./MainGiphy.js')
			   .pipe(gulp.dest('./UAT'));	

});

gulp.task('server', function (cb) {

  return  exec('node UAT/MainGiphy.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });

});

gulp.task('jswatch',function(){  
	
    return gulp.src(watch.jsfiles)
               .pipe(watchpkg(watch.jsfiles))
               .pipe(gulp.dest('build'));  	

});

gulp.task('build', function (cb) {

    return runSequence('pkgs','bower',  ['nodeFiles', 'imageFiles', 'htmlFiles'],'browser5', 'mainScript','sass','server',
						cb);

});

gulp.task('default', ['build']); 