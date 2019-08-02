const mouse = require('../')

const events = [
    'left-down',
    'left-up',
    'right-down',
    'right-up',
    'move',
    'left-drag',
    'right-drag'
]

for (const event of events) {
    mouse.on(event, function(x, y) {
        console.log(event, x, y)
    })
}

if (process.argv0 === 'interactive') {
    mouse.destroy()
}

// @TODO trigger mouse automation
