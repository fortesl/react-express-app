module.exports = {
    "root": true,
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "commonjs": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": ["react"],
    "rules": {
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "no-var": ["error"],
        "prefer-const": ["error"],
        "complexity": ["error", { "max": 21 }],
        "no-console": ["error", { "allow": ["warn", "error"] }],
        "no-unused-vars": ["error"]
    },
    "overrides": [
        {
            "files": ["test/**/*"],
            "env": { "mocha": true }
        }
    ],
    "globals": {
        "Dell": true
    },
    "settings":
    {
        "react": {
            "pragma": "React",
            "version": "^16.9.0"
        }
    }
};
