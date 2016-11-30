module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    stylesheets: {joinTo: 'app.css'}
  },

  plugins: {
    sass: {mode: 'native'},
    babel: {presets: ['es2015']}
  }
};
