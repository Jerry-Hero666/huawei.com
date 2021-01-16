const gulp = require('gulp'); // 引入模块
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const jsmin = require('gulp-uglify');
const imgmin = require('gulp-imagemin');
const concat = require('gulp-concat');
const sprite = require('gulp.spritesmith');
const less = require('gulp-less');
const path = require('path');
// gulp.task(taskname,callback);
gulp.task('default', function() {
    // 任务函数内必须是异步操作

    return new Promise((res, rej) => {
        console.log('你好，孙悟空')
        res();
    })
});


// gulp.src()   源
// gulp.pipe()  管道
// gulp.dest()  目标(目的地)


// 作用1 复制其他的文件
gulp.task('copyindex', function() {
    return gulp.src('./src/html/index.html')
        .pipe(gulp.dest('./dist/html'));
});

// 有条件的查找 并进行操作
gulp.task('copyjs', function() {
    return gulp.src(['./src/js/*.js', './src/js/*.min.js'])
        .pipe(gulp.dest('./dist/js'));
});


// 第三方工具
// gulp-rename
// $ cnpm i gulp-rename -D

// 改名
gulp.task('renameindex', function() {
    return gulp.src('./src/html/index.html')
        .pipe(rename('index.min.html'))
        .pipe(gulp.dust('./dist/html'));
});

// 1. 压缩html
// gulp-htmlmin
// $ cnpm i gulp-htmlmin -D
gulp.task('htmlmin', function() {
    return gulp.src('./src/html/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist/html'));
});

// 2.压缩css
// gulp-cssmin
// $cnpm i gulp-cssmin -D
gulp.task('cssmin', function() {
    return gulp.src('./src/css/*.css')
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'));
});

// 3. 压缩js
// gulp-uglify
// $ cnpm i gulp-uglify -D
gulp.task('jsmin', function() {
    return gulp.src('./src/js/library/*.js')
        .pipe(jsmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/js'))
})

// 4. 图片压缩
// gulp-imagemin
// $ cnpm i gulp-imagemin -D
gulp.task('imgmin', function() {
    return gulp.src('./src/pic/*')
        .pipe(imgmin())
        .pipe(gulp.dest('./dist/img'))
});

// 5. 合并文件
// gulp-concat
// $ cnpm i gulp-concat -D
gulp.task('concat', function() {
    return gulp.src(['./src/js/library/jquery.js', './src/js/library/index.js', './src/js/library/cookie.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./src/js'));

});

// 6.精灵图
// gulp.spritesmith
// $ cnpm i gulp.spritesmith -D
gulp.task('sprite', function() {
    return gulp.src('./src/pic/*')
        .pipe(sprite({
                imgName: 'sprite.png',
                cssName: 'sprite.css'
            })

        ).pipe(gulp.dest('./src/css'))
});

// 7. less 编译
// gulp-less
// cnpm i gulp-less -D
gulp.task('less', function() {
    return gulp.src('./src/styles/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./src/css'));
});

// 8. 文件监听
gulp.task('watchless', function() {
    // 监听less文件  如果文件发生改变
    // 自动执行less任务
    gulp.watch('./src/styles/*.less', gulp.series('less'));
});

// 9. 自动构建并监听
gulp.task('dev', function() {
    gulp.watch(['./src/styles/*.less', './src/html/*.html', './src/js/*.js'], gulp.series('htmlmin', 'concat', 'less', 'cssmin', 'jsmin'));
});