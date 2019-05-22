# native-mouse

Unifies [win-mouse](https://github.com/kapetan/win-mouse) and [osx-mouse](https://github.com/kapetan/osx-mouse)

Mouse tracking for Windows and macOS. Receive the screen position of various mouse events. The events are also emitted while another application is in the foreground.

```
npm install native-mouse
// or
yarn add native-mouse
```

# Electron

Currently there are no prepacked `.node` files for electron, you can build them using `electron-rebuild`.

# Usage

The module returns an event emitter instance.

```javascript
const mouse = require('native-mouse')

mouse.on('move', function(x, y) {
	console.log(x, y)
});
```

```javascript
import mouse from 'native-mouse'

mouse.on('move', function(x, y) {
	console.log(x, y)
})
```

__The program will not terminate as long as a mouse listener is active__. To allow the program to exit, either call `mouse.unref` (works as `unref`/`ref` on a TCP server) or `mouse.destroy()`.

The events emitted are: `move`, `left-down`, `left-up`, `left-drag`, `right-up`, `right-down` and `right-drag`. For each event the screen coordinates are passed to the handler function.
