module.exports = {
    plugins: ['jest', 'react'],
    extends: ['plugin:jest/recommended', 'plugin:react/recommended'],
    settings: {
        react: {
            version: '16.4.2',
        }
    }
}