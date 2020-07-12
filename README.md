# Rwandan Plate Number

    Validate a Rwandan car/motocycle plate number

[![Build Status](https://travis-ci.com/knowbee/rwandan-plate-validator.svg?token=yN9jXnk59suszMqNsJJb&branch=master)](https://travis-ci.com/knowbee/rwandan-plate-validator)
[![Dependency Status](https://david-dm.org/knowbee/rwanda.svg)](https://david-dm.org/knowbee/rwanda)
[![npm](https://img.shields.io/npm/v/rwanda.svg)](https://www.npmjs.com/package/rwanda)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

## Installation

```cli
npm install --save rwandan-plate-number
```

or

```cli
yarn add rwandan-plate-number
```

## Usage

### isValid()

```js
import { isValid } from "rwandan-plate-number";

isValid("IT110RE"); //=> true
isValid("RAA001A"); //=> true
isValid("RAA 001A"); //=> true
isValid("9CMD05A"); //=> true
isValid("RNP 025 K"); //=> true
```

### isSpecial()

National Police, Military Force, Government Projects, they all have special plates

```js
import { isSpecial } from "rwandan-plate-number";
isSpecial("GP012K"); //=> true
isSpecial("RDF 896 K"); //=> true
isSpecial("RNP 025 K"); //=> true
```

### isMoto()

```js
import { isMoto } from "rwandan-plate-number";
isMoto("IT001RE"); //=> true
isMoto("RC001P"); //=> true
```

### isForeign()

```js
import { isForeign } from "rwandan-plate-number";
isForeign("IT001RE"); //=> true
isForeign("IT 005 RE"); //=> true
```

### isDiplomatic()

```js
import { isDiplomatic } from "rwandan-plate-number";
isDiplomatic("9CMD 01 R"); //=> true
isDiplomatic("9CD 01 R"); //=> true
```

### isNormal()

```js
import { isNormal } from "rwandan-plate-number";
isNormal("RAA666P"); //=> true
```

## Contribution

Please before making a PR, read first this [Contributing Guideline](./CONTRIBUTING.md)

## License

MIT License

Copyright (c) 2020 Igwaneza Bruce <knowbeeinc@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
