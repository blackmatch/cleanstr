# cleanstr

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

Some characters we can't see them on the text editor, but they really exist. They may be indifferent for your programs, but sometimes not. For example, you try to set default values for the talbe fields on database, but the **default values** are read from some files that may contain **special chracters or zero-width chracters**. And then you may get the error: `invalid character for default value!`. So let's remove these `unwanted charaters`.

### Special characters
Unicode character value |	Escape sequence |	Meaning |	Category
------------- | ------------- | ------------- | -------------
\u0008 |	\b |	Backspace	
\u0009 |	\t |	Tab |	White space
\u000A |	\n |	Line feed (new line) |	Line terminator
\u000B |	\v | Vertical tab |	White space
\u000C |	\f |	Form feed |	White space
\u000D |	\r |	Carriage return |	Line terminator
\u0020 |		 | Space |	White space
\u0022 |	\" |	Double quotation mark (")	
\u0027 |	\' |	Single quotation mark (')	
\u005C |	\|Backslash (\)		
\u00A0 |  |		Nonbreaking space |	White space
\u2028 |  |		Line separator |	Line terminator
\u2029 |  |		Paragraph separator |	Line terminator
\uFEFF |  |		Byte order mark |	White space

For more detail, you can check [here](https://docs.microsoft.com/en-us/scripting/javascript/advanced/special-characters-javascript).

### Zero-width space
* `\u200B`
* `\u200C`
* `\u200D`
* `\uFEFF`

You can find the introduction [here](https://en.wikipedia.org/wiki/Zero-width_space).

### Installation

```js
npm install cleanstr --save
```

### Examples

```js
const cleaner = require('cleanstr');

const sampleStr = '\u0008123\u200B';
const str1 = cleaner.clean(sampleStr);  // remove special characters
const str2 = cleaner.cleanZero(sampleStr);  // remove zero-with characters
const str3 = cleaner.cleanAll(sampleStr); // remove both
const str4 = cleaner.cleanCustom(sampleStr, '\u0008\u200B');  // remove custom characters
```

### LICENSE
MIT

[npm-image]: https://img.shields.io/npm/v/cleanstr.svg?style=flat-square
[npm-url]: https://npmjs.org/package/cleanstr
[travis-image]: https://img.shields.io/travis/blackmatch/cleanstr.svg?style=flat-square
[travis-url]: https://travis-ci.org/blackmatch/cleanstr
[downloads-image]: http://img.shields.io/npm/dm/cleanstr.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/cleanstr
[coveralls-image]: https://img.shields.io/coveralls/blackmatch/cleanstr.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/blackmatch/cleanstr