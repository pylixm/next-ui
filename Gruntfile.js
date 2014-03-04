module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('files.json'),
        clean: {
            all: {
                src: ['dest']
            }
        },
        less: {
            themes: {
                files: {
                    "dest/css/next-graphic.css": "src/less/next-graphic.less"
                }
            }
        },
        cssmin: {
            themes: {
                expand: true,
                cwd: 'dest/css',
                src: ['*.css', '!*.min.css'],
                dest: 'dest/css',
                ext: '.min.css'
            }
        },
        jshint: {
            base: {
                src: '<%= pkg.scripts %>'
            },
            options: {
                eqnull: true
            }
        },
        qunit: {
            all: ['test/test.html']
        },
        concat: {
            base: {
                src: '<%= pkg.scripts %>',
                dest: 'dest/js/next-graphic.js'
            }
        },
        uglify: {
            base: {
                src: ['dest/js/next-graphic.js'],
                dest: 'dest/js/next-graphic.min.js'
            }
        },
        yuidoc: {
            compile: {
                options: {
                    paths: ['src/js'],
                    outdir: 'dest/doc'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib');

    grunt.registerTask('default', ['clean', 'less', 'cssmin', 'jshint', 'concat', 'yuidoc', 'uglify']);
};