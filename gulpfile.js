var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'), // Подключаем Sass пакет
    browserSync = require('browser-sync'); // Подключаем Browser Sync

gulp.task('sass', function() { // Создаем таск "sass"
  return gulp.src(['app/sass/**/*.sass', 'app/sass/**/*.scss']) // Берем источник
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(gulp.dest('app/css')) // Выгружаем результата в папку css
    .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
  });
gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
  gulp.watch(['app/sass/**/*.sass', 'app/sass/**/*.scss'], ['sass']); // Наблюдение за sass файлами в папке sass
});

gulp.task('default', ['watch']);
