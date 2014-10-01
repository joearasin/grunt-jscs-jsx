"use strict";

module.exports = function( grunt ) {
    grunt.initConfig({
        "jscs-jsx": {
            fail: {
                files: {
                    src: "../fixtures/fixture.js"
                },
                options: {
                    config: "../configs/fail.json"
                }
            },
            broken: {
                files: {
                    src: [ "../fixtures/broken.js", "../fixtures/fixture.js" ]
                },
                options: {
                    config: "../configs/fail.json"
                }
            },
            force: {
                files: {
                    src: "../fixtures/fixture.js"
                },
                options: {
                    config: "../configs/fail.json",
                    force: true
                }
            },
            success: {
                files: {
                    src: "../fixtures/fixture.js"
                },
                options: {
                    config: "../configs/success.json"
                }
            },
            inline: {
                files: {
                    src: "../fixtures/fixture.js"
                },
                options: {
                    "requireCurlyBraces": [ "while" ],
                    force: true
                }
            },
            "only-inline": {
                files: {
                    src: "../fixtures/only-inline.js"
                },
                options: {
                    "requireCurlyBraces": [ "while" ]
                }
            },
            "merge": {
                files: {
                    src: "../fixtures/merge.js"
                },
                options: {
                    config: true,
                    "requireCurlyBraces": [ "while" ]
                }
            }
        }
    });

    grunt.loadTasks( "../../tasks" );
    grunt.registerTask( "default", "jscs-jsx" );
    grunt.registerTask( "fatal", function() {
        grunt.fatal("test");
    });
};
