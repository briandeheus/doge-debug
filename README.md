# doge-debug

Inject some doge into your logs to detect important messages in a sea of strings.

### Installation

```sh
npm install doge-debug
```

### Usage

```js
var debug = require('doge-debug');
//Application logic here
var importantVariableThatINeedToSee = { foo: 'bar' };
debug('Oh my gosh! I need to see this:', importantVariableThatINeedToSee);
```
### Result
![result](http://i.imgur.com/r5gZM6J.png)
