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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var ctr_completer_1 = require("./ctr-completer");
// keyboard events
var KEY_DW = 40;
var KEY_RT = 39;
var KEY_UP = 38;
var KEY_LF = 37;
var KEY_ES = 27;
var KEY_EN = 13;
var KEY_TAB = 9;
var CtrInput = (function () {
    function CtrInput(completer) {
        var _this = this;
        this.completer = completer;
        this.clearSelected = false;
        this.overrideSuggested = false;
        this.fillHighlighted = true;
        this.ngModelChange = new core_1.EventEmitter();
        this._searchStr = "";
        this._displayStr = "";
        this._selectedItem = null;
        this.completer.selected.subscribe(function (item) {
            _this._selectedItem = item;
            if (!item) {
                return;
            }
            if (_this.clearSelected) {
                _this.searchStr = "";
            }
            else {
                _this.searchStr = item.title;
            }
            _this.ngModelChange.emit(_this.searchStr);
        });
        this.completer.highlighted.subscribe(function (item) {
            if (_this.fillHighlighted) {
                _this._displayStr = item.title;
                _this.ngModelChange.emit(item.title);
            }
        });
    }
    CtrInput.prototype.onInputChange = function (event) {
        this.searchStr = event.target.value;
    };
    CtrInput.prototype.keyupHandler = function (event) {
        if (event.keyCode === KEY_LF || event.keyCode === KEY_RT || event.keyCode === KEY_TAB) {
            // do nothing
            return;
        }
        if (event.keyCode === KEY_UP || event.keyCode === KEY_EN) {
            event.preventDefault();
        }
        else if (event.keyCode === KEY_DW) {
            event.preventDefault();
            this.completer.search(this.searchStr);
        }
        else if (event.keyCode === KEY_ES) {
            this._searchStr = this._displayStr;
            this.completer.clear();
        }
        else {
            if (!this.searchStr) {
                this.completer.clear();
                return;
            }
            this.completer.search(this.searchStr);
        }
    };
    CtrInput.prototype.keydownHandler = function (event) {
        if (event.keyCode === KEY_EN) {
            if (this.completer.hasHighlited()) {
                event.preventDefault();
            }
            this.completer.selectCurrent();
        }
        else if (event.keyCode === KEY_DW) {
            event.preventDefault();
            this.completer.nextRow();
        }
        else if (event.keyCode === KEY_UP) {
            event.preventDefault();
            this.completer.prevRow();
        }
        else if (event.keyCode === KEY_TAB) {
            if (this.overrideSuggested && this._selectedItem) {
                this.completer.onSelected({ title: this.searchStr, originalObject: null });
            }
            else {
                this.completer.selectCurrent();
            }
        }
        else if (event.keyCode === KEY_ES) {
            // This is very specific to IE10/11 #272
            // without this, IE clears the input text
            event.preventDefault();
        }
    };
    CtrInput.prototype.onBlur = function (event) {
        var _this = this;
        setTimeout(function () {
            if (_this.overrideSuggested) {
                _this.completer.onSelected({ title: _this.searchStr, originalObject: null });
            }
            _this.completer.clear();
        }, 200);
    };
    Object.defineProperty(CtrInput.prototype, "searchStr", {
        get: function () {
            return this._searchStr;
        },
        set: function (term) {
            this._searchStr = term;
            this._displayStr = term;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input("clearSelected"), 
        __metadata('design:type', Object)
    ], CtrInput.prototype, "clearSelected", void 0);
    __decorate([
        core_1.Input("overrideSuggested"), 
        __metadata('design:type', Object)
    ], CtrInput.prototype, "overrideSuggested", void 0);
    __decorate([
        core_1.Input("fillHighlighted"), 
        __metadata('design:type', Object)
    ], CtrInput.prototype, "fillHighlighted", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CtrInput.prototype, "ngModelChange", void 0);
    __decorate([
        core_1.HostListener("input", ["$event"]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], CtrInput.prototype, "onInputChange", null);
    __decorate([
        core_1.HostListener("keyup", ["$event"]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], CtrInput.prototype, "keyupHandler", null);
    __decorate([
        core_1.HostListener("keydown", ["$event"]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], CtrInput.prototype, "keydownHandler", null);
    __decorate([
        core_1.HostListener("blur", ["$event"]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], CtrInput.prototype, "onBlur", null);
    CtrInput = __decorate([
        core_1.Directive({
            selector: "[ctrInput]",
        }),
        __param(0, core_1.Host()), 
        __metadata('design:paramtypes', [ctr_completer_1.CtrCompleter])
    ], CtrInput);
    return CtrInput;
}());
exports.CtrInput = CtrInput;
//# sourceMappingURL=ctr-input.js.map