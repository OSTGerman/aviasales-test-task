declare module '/public/data/*.json';
declare module 'svg-sprite-loader/runtime/sprite.build';
declare module '*.svg?sprite' {
    const content: any;
    export default content;
}
