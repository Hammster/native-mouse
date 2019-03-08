import mouse from '../'

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
        console.log(x, y)
    })
}

// @TODO trigger mouse automation
