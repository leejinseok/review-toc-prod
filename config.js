module.exports = {
    ejs: {
        path: {
            watch: './src/**/*.ejs',
            exec: [
                './src/**/*.ejs',
                '!./src/views/variables/**/*'
            ]
        }
    },
    scss: {
        path: './src/static/css/**/*.scss'
    }
}
