module.exports = function (config) {
  config.addPassthroughCopy({ 'src/assets/scripts': 'js' });
  config.addPassthroughCopy({ 'src/assets/images': 'img' });
  config.addPassthroughCopy({ 'src/assets/fonts': 'fonts' });

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
