/**
 * @author jdiaz5513
 */
export declare const getFloat32Mask: (x: number) => DataView;
export declare const getFloat64Mask: (x: number) => DataView;
export declare const getInt16Mask: (x: number) => DataView;
export declare const getInt32Mask: (x: number) => DataView;
export declare const getInt64Mask: (x: bigint) => DataView;
export declare const getInt8Mask: (x: number) => DataView;
export declare const getUint16Mask: (x: number) => DataView;
export declare const getUint32Mask: (x: number) => DataView;
export declare const getUint64Mask: (x: bigint) => DataView;
export declare const getUint8Mask: (x: number) => DataView;
export declare function getBitMask(value: boolean, bitOffset: number): DataView;
export declare function getVoidMask(): void;
