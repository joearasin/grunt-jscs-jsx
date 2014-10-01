module.exports = function( grunt ) {
    "use strict";

    grunt.initConfig({
        bump: {
            options: {
                files: [ "package.json" ],

                // Commit
                commit: true,
                commitMessage: "Release v%VERSION%",
                commitFiles: [ "package.json" ],

                // Tag
                createTag: true,
                tagName: "%VERSION%",
                tagMessage: "Version %VERSION%",

                // Push
                push: true,
                pushTo: "origin"
            }
        },
        jshint: {
            options: {
                jshintrc: ".jshintrc"
            },
            all: [ "Gruntfile.js", "tasks/**/*.js", "test/*.js", "test/enmasse/Gruntfile.js" ]
        },
        "jscs-jsx": {
            src: "<%= jshint.all %>"
        },
        nodeunit: {
            methods: "test/methods.js",
            enmasse: "test/enmasse.js"
        }
    });

    // Load grunt tasks from NPM packages
    require( "load-grunt-tasks" )( grunt );
    require( "time-grunt" )( grunt );

    grunt.loadTasks( "tasks" );

    grunt.registerTask( "lint", [ "jshint", "jscs-jsx" ] );
    grunt.registerTask( "test", [ "lint", "nodeunit" ] );
    grunt.registerTask( "default", "test" );
};
