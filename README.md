# eslint-deprecated-modules

add plugin package in package.json
```js
"eslint-plugin-deprecatedModules": "https://github.com/mzbac/eslint-deprecated-modules.git",
```
add plugin settings on .eslintrc
```js

"plugins": [
    "deprecatedModules"
  ],
  
 ```

in rules section add 
```js

"deprecatedModules/no-deprecate-modules":2

OR

"deprecatedModules/no-deprecate-modules": [
  2,
  {
    "react": {
      "alternativeModule": "preact"
    }
  }
]

```
example config as below :
```js

{
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "parser": "babel-eslint",
  "plugins": [
    "deprecatedModules"
  ],
  "extends": "airbnb",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  },
  "rules": {
    "deprecatedModules/no-deprecate-modules":2
  }
}
```
