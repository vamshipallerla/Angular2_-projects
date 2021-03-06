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
var forms_1 = require("@angular/forms");
var ctr_completer_1 = require("../directives/ctr-completer");
var globals_1 = require("../globals");
require("rxjs/add/operator/catch");
var noop = function () { };
var COMPLETER_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return CompleterCmp; }),
    multi: true
};
var CompleterCmp = (function () {
    function CompleterCmp() {
        this.inputName = "";
        this.pause = globals_1.PAUSE;
        this.minSearchLength = globals_1.MIN_SEARCH_LENGTH;
        this.maxChars = globals_1.MAX_CHARS;
        this.overrideSuggested = false;
        this.clearSelected = false;
        this.fillHighlighted = true;
        this.placeholder = "";
        this.textSearching = globals_1.TEXT_SEARCHING;
        this.textNoResults = globals_1.TEXT_NORESULTS;
        this.autoMatch = false;
        this.disableInput = false;
        this.autofocus = false;
        this.selected = new core_1.EventEmitter();
        this.highlighted = new core_1.EventEmitter();
        this.blur = new core_1.EventEmitter();
        this.searchStr = "";
        this.control = new forms_1.FormControl("");
        this.displaySearching = true;
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
    }
    Object.defineProperty(CompleterCmp.prototype, "value", {
        get: function () { return this.searchStr; },
        set: function (v) {
            if (v !== this.searchStr) {
                this.searchStr = v;
            }
            // Propagate the change in any case
            this._onChangeCallback(v);
        },
        enumerable: true,
        configurable: true
    });
    ;
    CompleterCmp.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    CompleterCmp.prototype.writeValue = function (value) {
        this.searchStr = value;
    };
    CompleterCmp.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    CompleterCmp.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    CompleterCmp.prototype.ngOnInit = function () {
        var _this = this;
        this.completer.selected.subscribe(function (item) {
            var title = item ? item.title : "";
            _this.selected.emit(item);
            _this._onChangeCallback(title);
        });
        this.completer.highlighted.subscribe(function (item) {
            _this.highlighted.emit(item);
        });
        if (this.textSearching === "false") {
            this.displaySearching = false;
        }
    };
    CompleterCmp.prototype.onBlur = function () {
        this.blur.emit();
        this.onTouched();
    };
    CompleterCmp.prototype.onChange = function (value) {
        this.value = value;
    };
    CompleterCmp.prototype.open = function (searchValue) {
        if (searchValue === void 0) { searchValue = ""; }
        this.completer.search(searchValue);
    };
    CompleterCmp.prototype.close = function () {
        this.completer.clear();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "dataService", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "inputName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "pause", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "minSearchLength", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "maxChars", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "overrideSuggested", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "clearSelected", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "fillHighlighted", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CompleterCmp.prototype, "matchClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "textSearching", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "textNoResults", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], CompleterCmp.prototype, "fieldTabindex", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "autoMatch", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "disableInput", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CompleterCmp.prototype, "inputClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "autofocus", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "selected", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "highlighted", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CompleterCmp.prototype, "blur", void 0);
    __decorate([
        core_1.ViewChild(ctr_completer_1.CtrCompleter), 
        __metadata('design:type', ctr_completer_1.CtrCompleter)
    ], CompleterCmp.prototype, "completer", void 0);
    CompleterCmp = __decorate([
        core_1.Component({
            selector: "ng2-completer",
            template: "\n        <div class=\"completer-holder\" ctrCompleter>\n            <input type=\"search\" class=\"completer-input\" ctrInput [ngClass]=\"inputClass\" [(ngModel)]=\"searchStr\" (ngModelChange)=\"onChange($event)\" [attr.name]=\"inputName\" [placeholder]=\"placeholder\"\n                [attr.maxlength]=\"maxChars\" [tabindex]=\"fieldTabindex\" [disabled]=\"disableInput\" [clearSelected]=\"clearSelected\" [overrideSuggested]=\"overrideSuggested\" \n                [fillHighlighted]=\"fillHighlighted\" (blur)=\"onBlur()\" [autofocus]=\"autofocus\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" />\n\n            <div class=\"completer-dropdown-holder\" *ctrList=\"dataService; minSearchLength: minSearchLength; pause: pause; autoMatch: autoMatch; let items = results; let searchActive = searching; let isInitialized = searchInitialized;\">\n                <div class=\"completer-dropdown\" ctrDropdown *ngIf=\"isInitialized\">\n                    <div *ngIf=\"searchActive && displaySearching\" class=\"completer-searching\">{{textSearching}}</div>\n                    <div *ngIf=\"!searchActive && (!items || items.length === 0)\" class=\"completer-no-results\">{{textNoResults}}</div>\n                    <div class=\"completer-row-wrapper\" *ngFor=\"let item of items; let rowIndex=index\">\n                        <div class=\"completer-row\" [ctrRow]=\"rowIndex\" [dataItem]=\"item\">\n                            <div *ngIf=\"item.image || item.image === ''\" class=\"completer-image-holder\">\n                                <img *ngIf=\"item.image != ''\" src=\"{{item.image}}\" class=\"completer-image\" />\n                                <div *ngIf=\"item.image === ''\" class=\"completer-image-default\"></div>\n                            </div>\n                            <div class=\"completer-item-text\" [ngClass]=\"{'completer-item-text-image': item.image || item.image === '' }\">\n                                <completer-list-item class=\"completer-title\" [text]=\"item.title\" [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'title'\"></completer-list-item>\n                                <completer-list-item *ngIf=\"item.description && item.description != ''\" class=\"completer-description\" [text]=\"item.description\"\n                                    [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'description'\">\n                                </completer-list-item>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
            styles: ["\n    .completer-dropdown {\n        border-color: #ececec;\n        border-width: 1px;\n        border-style: solid;\n        border-radius: 2px;\n        width: 250px;\n        padding: 6px;\n        cursor: pointer;\n        z-index: 9999;\n        position: absolute;\n        margin-top: -6px;\n        background-color: #ffffff;\n    }\n\n    .completer-row {\n        padding: 5px;\n        color: #000000;\n        margin-bottom: 4px;\n        clear: both;\n        display: inline-block;\n        width: 103%;\n    }\n\n    .completer-selected-row {\n        background-color: lightblue;\n        color: #ffffff;\n    }\n\n    .completer-description {\n        font-size: 14px;\n    }\n\n    .completer-image-default {\n        width: 16px; \n        height: 16px;\n        background-image: url(\"demo/res/img/default.png\");\n    }\n\n    .completer-image-holder {\n        float: left;\n        width: 10%;\n    }\n    .completer-item-text-image {\n        float: right;\n        width: 90%;\n    }\n    "],
            providers: [COMPLETER_CONTROL_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [])
    ], CompleterCmp);
    return CompleterCmp;
}());
exports.CompleterCmp = CompleterCmp;
//# sourceMappingURL=completer-cmp.js.map