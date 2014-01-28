/*
 * grunt-init-gebo-hai
 * https://github.com/RaphaelDeLaGhetto/grunt-init-gebo-hai
 * Daniel Bidulock
 *
 * Adapted from:
 *
 * grunt-init-commonjs
 * https://gruntjs.com/
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a Angular gebo human-agent interface'

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install && bower install_. After that, you may execute project tasks with _grunt_. For ' +
  'more information about installing and configuring Grunt, please see ' +
  'the Getting Started guide:' +
  '\n\n' +
  'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('description'),
    init.prompt('version'),
    init.prompt('repository'),
    init.prompt('homepage'),
    init.prompt('bugs'),
    init.prompt('licenses'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url'),
    init.prompt('main')
  ], function(err, props) {
    props.keywords = [];
    props.dependencies = {};
    props.devDependencies = {
            "grunt": "~0.4.1",
            "grunt-contrib-copy": "~0.4.0",
            "grunt-contrib-concat": "~0.3.0",
            "grunt-contrib-coffee": "~0.6.4",
            "grunt-contrib-uglify": "~0.2.0",
            "grunt-contrib-compass": "~0.1.3",
            "grunt-contrib-jshint": "~0.6.0",
            "grunt-contrib-cssmin": "~0.5.0",
            "grunt-contrib-connect": "~0.2.0",
            "grunt-contrib-clean": "~0.4.0",
            "grunt-contrib-htmlmin": "~0.1.1",
            "grunt-contrib-imagemin": "~0.1.2",
            "grunt-contrib-livereload": "~0.1.2",
            "grunt-bower-requirejs": "~0.4.1",
            "grunt-usemin": "~0.1.10",
            "grunt-regarde": "~0.1.1",
            "grunt-rev": "~0.1.0",
            "grunt-karma": "~0.3.0",
            "grunt-open": "~0.2.0",
            "matchdep": "~0.1.1",
            "grunt-google-cdn": "~0.1.1",
            "grunt-ngmin": "~0.0.2",
    };

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // Generate package.json file.
    init.writePackageJSON('package.json', props);

    // All done!
    done();
  });

};
