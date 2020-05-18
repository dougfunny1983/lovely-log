# lovely-log
Beautiful ways of presenting a print in the terminal

One autumn afternoon, I was introduced by my Trybe course instructor, a way to use descriptive and colorful logs at the terminal. From there I came up with the idea of making a library with his gits, to be able to use in the terminal. That's where Lovely Log was born. Simple, educational and most importantly ... Lindinho!

How to use?
Import the library, and use them instead of a 'log' normally.

Example:

As it was before Lovely Log →

```javascript
console.log ('Bar, Foo');
```

Now with Lovely Log →

```javascript
const { info, debug, error, warn } = require('lovelylog')

// or, with ES6 modules support:
// import { info, debug, error, warn } from 'lovelylog'

info('Bar, Foo');
debug('Bar, Foo');
error('Bar, Foo');
warn('Bar, Foo');
```

Is not it pretty?

You can also use the `makeMessage` function to get a custom logger. For example:

```javascript
const { makeMessage } = require('lovelylog')

const critical = message => makeMessage(message, 'Critical', '##FF0000')
critical('Critical error message')

// or, without creating a new function
makeMessage('Critical error message', 'Critical', '#FF0000')
```

Credits from my master Rogério Munhoz, better known as Roz!
