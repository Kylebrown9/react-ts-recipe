# React TypeScript Recipe

This is the simplest possible setup for my preferred React + TypeScript toolchain.

The setup can be thought of as layering the following tools / frameworks on top of each other
 1. git
 2. yarn
 3. TypeScript
 4. webpack
 5. React

# How this was made

Here are the instructions that were used to make this template

## Git Setup

1. Install git if not already installed
2. Execute `git init`
3. Create a file called ".gitignore"
   1. Add a line containing `node_modules/`
   2. Add a line containing `dist/`
4. Execute `git add .`
5. Execute `git commit -m "Initial Commit"`

## Yarn Setup

1. Install yarn if not already installed
2. Execute `yarn init -y`
3. Modify any metadata in "package.json" if desired

## TypeScript Setup

1. Create the following files and their parent directories as needed

**src/index.ts**
```tsx
const message: string = "Our TypeScript file is running as JavaScript";
console.log(message);
```

**static/index.html**
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>A Temporary Title</title>
  </head>
  <body>
      <script src="index.js"></script>
  </body>
</html>
```

**tsconfig.json**
```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": false,
    "module": "es6",
    "target": "es5",
    "removeComments": true,
    "jsx": "react",
    "allowJs": true,
  },
  "include": ["./src"]
}
```

2. Execute `yarn add -D typescript`
3. Execute `yarn run tsc`
4. Copy the "index.html" file into the "dist" folder
5. Open the "dist/index.html" file in your browser and check the console output

## Webpack Setup
1. Create a file "webpack.config.js" with the following contents
```js
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
```
2. Change the script tag in "index.html" to point to "bundle.js" instead of "index.js"
3. Execute `yarn add -D webpack webpack-cli ts-loader file-loader`
4. Delete the contents of the "dist" directory
5. Execute `yarn run webpack --mode development`
6. Open the "dist/index.html" file in your browser and check the console output

## React Setup

1. Delete "src/index.ts"
2. Create a file "src/index.tsx" with the following contents
```tsx
import * as React from "react";
import * as ReactDOM from "react-dom";

ReactDOM.render(<p>Some basic text</p>, document.getElementById("root"));
```
3. In "webpack.config.js" change "index.ts" to "index.tsx"
4. Add `<div id="root"></div>` to the body of "static/index.html" **before** the script tag
5. Execute `yarn add react react-dom @types/react @types/react-dom"
6. Delete the contents of the "dist" directory
7. Execute `yarn run webpack --mode development`
8. Open the "dist/index.html" file in your browser and check the console output

# References

* https://webpack.js.org/guides/getting-started
* https://medium.com/@adriancelczynski/react-with-typescript-starter-kit-without-create-react-app-including-webpack-eslint-bef225c35ffa
