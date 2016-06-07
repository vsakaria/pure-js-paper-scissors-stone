module.exports = function (grunt) {
    grunt.initConfig({
        jasmine: {
            src: ['./app/**/*.js', '!./app/**/gameController.js', '!./app/main.js'],
            options: {
                specs: './specs/*spec.js',
                outfile: '_specRunner.html',
                keepRunner: true
            }
        },
        jshint: {
            files: ['Gruntfile.js', './app/**/*.js'],
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        },
        sass: {
            dist: {
                files: {
                    './styles/main.css': './styles/main.sass'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('dev', ['sass', 'jshint', 'jasmine']);
    grunt.registerTask('watch', ['watch']);
};