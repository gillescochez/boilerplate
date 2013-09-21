module.exports = function(grunt) {

    var sources = [
        'source/build/intro.js',
        'source/*.js',
        'source/build/export.js',
        'source/build/outro.js'
    ];

    var UTs = ['tests/index.html'];

    var src = 'dist/<%= pkg.name %>.src.js';
    var min = 'dist/<%= pkg.name %>.min.js';
    var demo = 'demo/<%= pkg.name %>.js';

    var watchTasks = ['concat', 'copy'];

    // config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        qunit: {
            all: UTs
        },
        concat: {
            build: {
                src: sources,
                dest: src
            }
        },
        uglify: {
            build: {
                src: [src],
                dest: min
            }
        },
        watch: {
            scripts: {
                files: sources,
                tasks: watchTasks
            }
        },
        copy: {
            main: {
                src: [src],
                dest: demo
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['qunit', 'concat', 'uglify', 'copy']);
};