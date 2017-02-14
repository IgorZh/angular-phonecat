var path = require('path');

module.exports = {
  entry: './app/app.module.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app')
  }, module: {
    loaders: [
      {
        test: /\/angular(.min)?\.js$/,
        loader: 'remove-angular-modules?moduleName=phonecatApp&whiteList[]=foo&whiteList[]=bar&blackList[]=skillbridge&testing=e2e'
      }
    ]
  }
};