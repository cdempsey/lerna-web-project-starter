module.exports = {
  '**/*': [
    'npx prettier --config .config/prettier/prettier.config.js --write --ignore-unknown',
    'npx eslint --config .config/eslint/.eslintrc.js',
  ],
}
