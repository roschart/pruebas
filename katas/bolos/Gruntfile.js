module.exports = function(grunt) {
    var path = require('path');
    grunt.initConfig({
        nodeunit: {
            all: ['test/*.js']
        },
        watch: {
            files: ['src/**/*.js', 'test/**/*.js'],
            tasks: 'nodeunit'
        }
    });
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
};
