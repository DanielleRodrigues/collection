"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leao = void 0;
var Felino_1 = require("./Felino");
var Leao = /** @class */ (function (_super) {
    __extends(Leao, _super);
    function Leao(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Leao.prototype.emitSound = function (sound) {
        console.log("Leao emite ".concat(sound));
    };
    Leao.prototype.caca = function (presa, qtdPressas, tipoPresa) {
        if (tipoPresa != undefined) {
            console.log("Le\u00E3o est\u00E1 ca\u00E7ando um ".concat(tipoPresa));
        }
        var numPresa = (qtdPressas == undefined) ? 1 : qtdPressas;
        console.log("Leao est\u00E1 ca\u00E7ando ".concat(numPresa, ", ").concat(presa));
    };
    return Leao;
}(Felino_1.Felino));
exports.Leao = Leao;
