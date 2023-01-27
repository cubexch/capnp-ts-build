"use strict";
/**
 * This file is generated by hand in order to bootstrap compiler development. It is intended to be an exact match to
 * compiled output.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealmGateway = exports.Persistent = exports.Persistent_SaveResults = exports.Persistent_SaveParams = exports._capnpFileId = void 0;
const index_1 = require("../index");
exports._capnpFileId = "b8630836983feed7";
class Persistent_SaveParams extends index_1.Struct {
    adoptSealFor(value) { index_1.Struct.adopt(value, index_1.Struct.getPointer(0, this)); }
    disownSealFor() { return index_1.Struct.disown(this.getSealFor()); }
    getSealFor() { return index_1.Struct.getPointer(0, this); }
    hasSealFor() { return !index_1.Struct.isNull(index_1.Struct.getPointer(0, this)); }
    setSealFor(value) { index_1.Struct.copyFrom(value, index_1.Struct.getPointer(0, this)); }
    toString() { return "Persistent_SaveParams_" + super.toString(); }
}
exports.Persistent_SaveParams = Persistent_SaveParams;
Persistent_SaveParams._capnp = { displayName: "SaveParams", id: "f76fba59183073a5", size: new index_1.ObjectSize(0, 1) };
class Persistent_SaveResults extends index_1.Struct {
    adoptSturdyRef(value) { index_1.Struct.adopt(value, index_1.Struct.getPointer(0, this)); }
    disownSturdyRef() { return index_1.Struct.disown(this.getSturdyRef()); }
    getSturdyRef() { return index_1.Struct.getPointer(0, this); }
    hasSturdyRef() { return !index_1.Struct.isNull(index_1.Struct.getPointer(0, this)); }
    setSturdyRef(value) { index_1.Struct.copyFrom(value, index_1.Struct.getPointer(0, this)); }
    toString() { return "Persistent_SaveResults_" + super.toString(); }
}
exports.Persistent_SaveResults = Persistent_SaveResults;
Persistent_SaveResults._capnp = { displayName: "SaveResults", id: "b76848c18c40efbf", size: new index_1.ObjectSize(0, 1) };
class Persistent extends index_1.Struct {
    toString() { return "Persistent_" + super.toString(); }
}
exports.Persistent = Persistent;
Persistent.SaveParams = Persistent_SaveParams;
Persistent.SaveResults = Persistent_SaveResults;
Persistent._capnp = { displayName: "Persistent", id: "c8cb212fcd9f5691", size: new index_1.ObjectSize(0, 0) };
class RealmGateway extends index_1.Struct {
    toString() { return "RealmGateway_" + super.toString(); }
}
exports.RealmGateway = RealmGateway;
RealmGateway._capnp = { displayName: "RealmGateway", id: "84ff286cd00a3ed4", size: new index_1.ObjectSize(0, 0) };
//# sourceMappingURL=persistent.capnp.js.map