"use strict";

var grunt = require( "grunt" );

grunt.file.setBase( "test/enmasse" );

exports.fail = function( test ) {
    grunt.util.spawn({
        cmd: "grunt",
        args: [ "jscs-jsx:fail" ]
    }, function( error, result ) {
        test.equal( result.code, 3 );

        test.done();
    });
};

exports.broken = function( test ) {
    grunt.util.spawn({
        cmd: "grunt",
        args: [ "jscs-jsx:broken" ]
    }, function( error, result ) {
        test.equal( result.code, 3 );

        test.done();
    });
};

exports.force = function( test ) {
    grunt.util.spawn({
        cmd: "grunt",
        args: [ "jscs-jsx:force" ]
    }, function( error, result ) {
        test.equal( result.code, 0 );

        test.done();
    });
};

exports.forceAndFatal = function( test ) {
    grunt.util.spawn({
        cmd: "grunt",
        args: [ "jscs-jsx:force", "fatal" ]
    }, function( error, result ) {
        test.equal( result.code, 1 );

        test.done();
    });
};

exports.success = function( test ) {
    grunt.util.spawn({
        cmd: "grunt",
        args: [ "jscs-jsx:success" ]
    }, function( error, result ) {
        test.equal( result.code, 0 );

        test.done();
    });
};

exports.onlyInline = function( test ) {
    grunt.util.spawn({
        cmd: "grunt",
        args: [ "jscs-jsx:only-inline" ]
    }, function( error, result ) {
        test.equal( result.code, 0 );

        test.done();
    });
};

exports.merge = function( test ) {
    grunt.util.spawn({
        cmd: "grunt",
        args: [ "jscs-jsx:merge" ]
    }, function( error, result ) {
        test.ok( result.stdout.indexOf( "curly" ) > 0 );
        test.ok( result.stdout.indexOf( "Illegal keyword:" ) > 0 );
        test.equal( result.code, 3 );

        test.done();
    });
};
