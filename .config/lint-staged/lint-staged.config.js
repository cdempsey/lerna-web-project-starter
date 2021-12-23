module.exports = {
  '**/*':
    'npx prettier --config .config/prettier/prettier.config.js --ignore-path .config/prettier/.prettierignore --write --ignore-unknown',
  '**/*.[m]js': 'npx eslint --config .config/eslint/.eslintrc.js',
}
