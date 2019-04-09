const util = require('util')
const EventEmitter = require('events').EventEmitter
const bindings = require('bindings')
const os = require('os')
const Mouse = bindings('native-mouse').Mouse;
const isWindows = (os.platform() === 'win32')

class NativeMouseInstance extends EventEmitter {
	constructor () {
		super()
		
		this.mouse = null
		this.left = false
		this.right = false

		// Only create mouse if there is a listener
		this.once('newListener', this.init)

		this.ref = function() {
			if(this.mouse) {
				this.mouse.ref()
			}
		}

		this.unref = function() {
			if(this.mouse) {
				this.mouse.unref()
			}
		}

		this.destroy = function() {
			if(this.mouse) {
				this.mouse.destroy()
			}
			this.mouse = null;
		}

		this.init = this.init.bind(this)
	}

	init() {
		this.mouse = new Mouse((type, x, y) => {
			this.emit(type, x, y)
		})
	}
}

// inherit the prototype methods
util.inherits(NativeMouseInstance, EventEmitter);
const instance = new NativeMouseInstance()

// cleanup the message loop
function exitHandler(options, exitCode) {
	instance.destroy()

  if (options.exit) {
		process.exit(exitCode)
	}
}


//do something when app is closing
process.on('exit', exitHandler.bind(null,{cleanup:true}));

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit:true}));

// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler.bind(null, {exit:true}));
process.on('SIGUSR2', exitHandler.bind(null, {exit:true}));

//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));

module.exports = instance;
