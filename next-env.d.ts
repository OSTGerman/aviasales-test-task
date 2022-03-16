/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
declare module 'svg-sprite-loader/runtime/sprite.build';
declare module '*.svg?sprite' {
    const content: any;
    export default content;
}
