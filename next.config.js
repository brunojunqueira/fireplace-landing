const nextTranslate = require('next-translate');
const path = require('path');

module.exports = {
  reactStrictMode: false,
  ...nextTranslate(),
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
};
