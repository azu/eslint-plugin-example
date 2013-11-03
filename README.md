# eslint-plugin-example [![Build Status](https://secure.travis-ci.org/azu/eslint-plugin-example.png?branch=master)](http://travis-ci.org/azu/eslint-plugin-example)

## Getting Started

```sh
git submodule update --init
npm install
```

## Usage

```sh
$ eslint -c example/config.json --rulesdir plugin example/squalid.js
example/squalid.js: line 5, col 8, Warning - 恥ずかしい'taboo'禁止!

1 problem
```


alt. ``./node_modules/eslint/bin/eslint.js -c example/config.json --rulesdir plugin example/squalid.js``

## Documentation

This example project contain

* ``taboo-name`` plugin
* ``taboo-nameSpec`` test.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License
Copyright (c) 2013 azu  
Licensed under the MIT license.
