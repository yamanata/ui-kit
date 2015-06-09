module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css/style.css": "less/style.less" // destination file and source file
        }
      }
    },
    watch: {
        less: {
            files: '**/*.less',
            tasks: ['less']
        },
        css: {
            files: '**/*.css',
            options: {
                livereload: true
            }
        },
        html: {
            files: ['index.html','**/*.css'],
            options: {
                livereload: true
            }
        }
    },
  });

  grunt.registerTask('default', ['less', 'watch']);

};