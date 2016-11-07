'use strict'

const architect = require('architect');
const path = require('path');

// Basic Architect config loader, with error handling.
architect.loadConfig(path.join(__dirname, 'config.architect.js'), (err, config) => {
    if (err) {
        console.error('Could not load Architect config', err)
        process.exit(1);
        return;
    }

    // Create the Architect app from the config file.
    architect.createApp(config, (err, app) => {
        if (err) {
            console.error('could not start Architect app', err)
            process.exit(2);
            return
        }
        console.log('Architect app started, OK!')
    })
});