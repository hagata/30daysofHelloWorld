'use strict'
//Get list of enabled plug-ins from some db

const plugins = []
const pluginDb = [
    "hello",
    // "admin"
]

/**
 * Set plugin/ paths to include all enabled plugins
 */
for (const entry of pluginDb){
    plugins.push(`./plugins/${entry}`)
}
plugins.push(`./core/server`)

/**
 * Export compiled config list of enabled plugins.
 */
module.exports = plugins;