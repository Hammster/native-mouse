/// <reference types="node" />

declare module 'native-mouse' {
    import { EventEmitter } from "events";

    export enum NativeMouseEventType {
        LEFT_DOWN = 'left-down',
        LEFT_UP = 'left-up',
        RIGHT_DOWN = 'right-down',
        RIGHT_UP = 'right-up',
        MOVE = 'move',
        LEFT_DRAG = 'left-drag',
        RIGHT_DRAG = 'right-drag'
    }

    export type NativeMouseEventHandler = (x: number , y: number) => void

    class NativeMouseInstance extends EventEmitter {
        unref: () => void
        ref: () => void
        destroy: () => void

        on(event: NativeMouseEventType, listener: NativeMouseEventHandler): this;
    }

    const _default: NativeMouseInstance;
    export default _default;
}
