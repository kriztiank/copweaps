module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-uncss')({
      html: ['./index.html'],
    }),
  ],
};
