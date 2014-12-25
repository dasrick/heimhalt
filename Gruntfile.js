module.exports = function (grunt) {
    'use strict';
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            less: {
                files: ['less/*.less'],
                tasks: 'default'
            }
        },
        less: {
            compileTheme: {
                options: {
                    paths: ['less'],
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    //cleancss: true,
                    compress: false,
                    optimization: 2,
                    sourceMapFilename: 'css/style.css.map'
                },
                expand: true,
                flatten: false,
                cwd: 'less/',
                src: 'style.less',
                dest: 'css/',
                ext: '.css'
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 9']
            },
            app: {
                src: ['css/*.css', '!css/*.min.css']
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'css/',
                src: ['*.css', '!*.min.css'],
                dest: 'css/',
                ext: '.min.css'
            }
        }
    });
    grunt.registerTask('default', ['less', 'autoprefixer', 'cssmin']);
    grunt.registerTask('go', ['default', 'simple-watch']);
};
