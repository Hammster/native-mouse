import { EventEmitter } from "events";

enum NativeMouseEventType {
    'left-down',
    'left-up',
    'right-down',
    'right-up',
    'move',
    'left-drag',
    'right-drag'
}

type NativeMouseEventHandler = (type: NativeMouseEventType, x: number , y: number) => void

interface INativeMouseEvent {
    on(event: NativeMouseEventType, listener: NativeMouseEventHandler): this;
}

class NativeMouseEventEmitter extends EventEmitter implements INativeMouseEvent {

}

export default NativeMouseEventEmitter
