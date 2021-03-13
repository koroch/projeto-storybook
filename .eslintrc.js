module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true,
        'jest': true,
    },
    'extends': [
        'eslint:recommended',
    ],
    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'rules': {
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'indent': ['error', 4],
        'comma-spacing': ['error', {before: false, after: true}],
        'no-unused-vars': 'off',
    },
    'parser': 'babel-eslint',
};
