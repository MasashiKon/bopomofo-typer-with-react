module.exports = {
    rules: [
        {
            test: /\.(png|mp3)$/,
            use: [{ loader: 'url-loader'}]
        }
    ]
}