module.exports = {
  "env": {
    "browser": true,
    "jest/globals": true,
    "es6": true
  },
  "extends": ["eslint:recommended", "airbnb", "plugin:flowtype/recommended"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "flowtype",
    "jest"
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx"]
      },
      "webpack": {
        "config": "./webpack/webpack.config.js"
      }
    }
  },
  "rules": {
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }],

    "react/no-danger": "off",
    "react/no-array-index-key": "off",
    "react/sort-comp": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/label-has-for": "off",
    "no-plusplus": "off",
    "no-nested-ternary": "off",
    "react/jsx-curly-spacing": "off",
    "jsx-quotes": "off",
    "react/prefer-stateless-function": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "no-useless-constructor": "off",
  },
};
