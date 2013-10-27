module.exports = function(grunt) {
    "use strict";
    
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    debugInfo: false,
                    lineNumbers: false
                },
                files: {
                    'wp-content/themes/blankslate/style.css': 'wp-content/themes/blankslate/sass/style.scss', // 'destination': 'source'
                }
            }
        },
        
        // This sets up watch configurations
        watch: {
            all: {
                //files: ['sass/*.scss', 'dev/*.js'],
                files: ['wp-content/themes/blankslate/sass/*.scss'],
                //tasks: ['common','sass:dist']
                tasks: ['sass:dist']
            }
        },
    });
    
    // Load the grunt plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');


    // Default task(s).
    grunt.registerTask("default", ['sass:dist', 'watch:all']);
};
