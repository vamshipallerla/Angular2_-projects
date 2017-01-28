"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var CtrCompleter = (function () {
    function CtrCompleter() {
        this.selected = new core_1.EventEmitter();
        this.highlighted = new core_1.EventEmitter();
        this._hasHighlited = false;
        this.hasSelected = false;
    }
    CtrCompleter.prototype.ngOnInit = function () {
    };
    CtrCompleter.prototype.registerList = function (list) {
        this.list = list;
    };
    CtrCompleter.prototype.registerDropdown = function (dropdown) {
        this.dropdown = dropdown;
    };
    CtrCompleter.prototype.onHighlighted = function (item) {
        this.highlighted.emit(item);
        this._hasHighlited = true;
    };
    CtrCompleter.prototype.onSelected = function (item) {
        this.selected.emit(item);
        this.hasSelected = true;
        this.clear();
    };
    CtrCompleter.prototype.search = function (term) {
        if (this.hasSelected) {
            this.selected.emit(null);
            this.hasSelected = false;
        }
        if (this.list) {
            this.list.search(term);
        }
    };
    CtrCompleter.prototype.clear = function () {
        if (this.dropdown) {
            this.dropdown.clear();
        }
        if (this.list) {
            this.list.clear();
        }
        this._hasHighlited = false;
    };
    CtrCompleter.prototype.selectCurrent = function () {
        if (this.dropdown) {
            this.dropdown.selectCurrent();
        }
    };
    CtrCompleter.prototype.nextRow = function () {
        if (this.dropdown) {
            this.dropdown.nextRow();
        }
    };
    CtrCompleter.prototype.prevRow = function () {
        if (this.dropdown) {
            this.dropdown.prevRow();
        }
    };
    CtrCompleter.prototype.hasHighlited = function () {
        return this._hasHighlited;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CtrCompleter.prototype, "selected", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CtrCompleter.prototype, "highlighted", void 0);
    CtrCompleter = __decorate([
        core_1.Directive({
            selector: "[ctrCompleter]",
        }), 
        __metadata('design:paramtypes', [])
    ], CtrCompleter);
    return CtrCompleter;
}());
exports.CtrCompleter = CtrCompleter;
//# sourceMappingURL=ctr-completer.js.map