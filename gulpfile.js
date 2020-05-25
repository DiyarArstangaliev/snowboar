const gulp = require("gulp");
const browserSync = require("browser-sync");
const fileinclude = require("gulp-file-include");


gulp.task("fileinclude", function() {
  return gulp
    .src(["./assets/index.html"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@root"
      })
    )
    .pipe(gulp.dest("./"));
});

gulp.task("js", function() {
  return gulp.src("assets/**/*.js").pipe(gulp.dest("./js"));
});

gulp.task("browser-sync", function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp
    .watch(
       "./assets/*.html",
      gulp.parallel("fileinclude")
    )
    .on("change", browserSync.reload);
  gulp
    .watch("./assets/**/*.js", gulp.parallel("js"))
    .on("change", browserSync.reload);
  gulp
    .watch("./assets/**/*.css")
    .on("change", browserSync.reload);
});

gulp.task("default", gulp.series("fileinclude", "js",  "browser-sync"));
