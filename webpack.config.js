const path = require('path');

module.exports = {
   entry: ['./src/index.ts', './static/index.html'],
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         },
         {
            test: /\.html$/,
            loader: "file-loader"
         }
      ],
   },
   resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
   },
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
   },
};
