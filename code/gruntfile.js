module.exports = function(grunt){

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: ".jshintrc"
      },
      build: [ "public/javascripts/**/*.js" ]
    },

    watch: {
      css: {
        files: "public/stylesheets/*.css",
        options: {
          livereload: true
        }
      },
      scripts: {
        files: "public/javascripts/**/*.js",
        tasks: ["clean", "jshint:build", "browserify:dev"]
      },
      views: {
        files: "views/**/*.jade",
        options: {
          livereload: true
        }
      },
      reloadBuild: {
        files: "public/build/**/*.js",
        options: {
          livereload: true
        }
      }
    },

    clean: {
      app: ["public/build/app.js"]
    },

    browserify: {
      dev: {
        src: ["public/javascripts/app.js"],
        dest: "public/build/app.js",
        options: {
          bundleOptions: {
            debug: true
          }
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-browserify");

  grunt.registerTask("default", ["watch"]);
};

