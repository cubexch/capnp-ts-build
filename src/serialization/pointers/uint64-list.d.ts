/**
 * @author jdiaz5513
 */
import { _ListCtor, List } from "./list";
export declare class Uint64List extends List<bigint> {
    static readonly _capnp: _ListCtor;
    get(index: number): bigint;
    set(index: number, value: bigint): void;
    toString(): string;
}
