import { Component, Input, } from '@angular/core';
var CardBgComponent = (function () {
    function CardBgComponent() {
    }
    return CardBgComponent;
}());
export { CardBgComponent };
CardBgComponent.decorators = [
    { type: Component, args: [{
                selector: 'as-card-bg',
                template: "<div class=\"card card--bg {{customClass}} shadow-{{shadow}}\"  [ngStyle]=\"{'background-image': bg && 'url(' + bg + ')'}\" > <div class=\"card__options card__options--left\" *ngIf=\"optionsLeft?.length > 0\"> <div class=\"card__option\"  *ngFor=\"let option of optionsLeft\" (click)=\"option.callback()\"> <button class=\"btn btn-link\"  (click)=\"option.callback()\"> <i class=\"{{option.prefix}} {{option.prefix}}-{{option.icon}}\"></i> </button> </div> </div> <div class=\"card__options card__options--right\"  *ngIf=\"optionsRight?.length > 0\"> <div class=\"card__option\"  [hidden]=\"option.dropdown !== undefined\"  *ngFor=\"let option of optionsRight\" > <button class=\"btn btn-link\"  (click)=\"option.callback()\"> <i class=\"{{option.prefix}} {{option.prefix}}-{{option.icon}}\"></i> </button> </div> <div class=\"card__option\" [hidden]=\"option.dropdown === undefined\" dropdown *ngFor=\"let option of optionsRight\"> <button dropdownToggle class=\"btn btn-link dropdown-toggle\"> <i class=\"{{option.prefix}} {{option.prefix}}-{{option.icon}}\"></i> </button> <ul *dropdownMenu class=\"dropdown-menu dropdown-menu-right\" [hidden]=\"option.dropdown !== undefined\" role=\"menu\"> <li *ngFor=\"let choice of option.dropdown\"> <a class=\"dropdown-item\" (click)=\"choice.callback()\"><i class=\"{{option.prefix}} {{option.prefix}}-{{choice.icon}}\"></i>{{choice.label}}</a> </li> </ul> </div> </div> <div class=\"card__body\" >      <h4 class=\"card__title\">{{title}}</h4> <h6 class=\"card__subtitle\">{{subtitle}}</h6> </div> <div class=\"card__footer\"  *ngIf=\"actions\"> <div class=\"card__actions\" [ngStyle]=\"{'justify-content': footer.justify}\"> <button class=\"btn {{action?.customClass}} card__action\"   *ngFor=\"let action of actions\"  [disabled]=\"action.disabled\"  (click)=\"action.callback()\"> {{action.label}} </button> </div> </div> </div>"
            },] },
];
/**
 * @nocollapse
 */
CardBgComponent.ctorParameters = function () { return []; };
CardBgComponent.propDecorators = {
    'bg': [{ type: Input, args: ['bg',] },],
    'title': [{ type: Input, args: ['title',] },],
    'subtitle': [{ type: Input, args: ['subtitle',] },],
    'customClass': [{ type: Input, args: ['customClass',] },],
    'optionsLeft': [{ type: Input, args: ['optionsLeft',] },],
    'optionsRight': [{ type: Input, args: ['optionsRight',] },],
    'actions': [{ type: Input, args: ['actions',] },],
    'footer': [{ type: Input, args: ['footer',] },],
    'shadow': [{ type: Input, args: ['shadow',] },],
};
function CardBgComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CardBgComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    CardBgComponent.ctorParameters;
    /** @type {?} */
    CardBgComponent.propDecorators;
    /** @type {?} */
    CardBgComponent.prototype.bg;
    /** @type {?} */
    CardBgComponent.prototype.title;
    /** @type {?} */
    CardBgComponent.prototype.subtitle;
    /** @type {?} */
    CardBgComponent.prototype.customClass;
    /** @type {?} */
    CardBgComponent.prototype.optionsLeft;
    /** @type {?} */
    CardBgComponent.prototype.optionsRight;
    /** @type {?} */
    CardBgComponent.prototype.actions;
    /** @type {?} */
    CardBgComponent.prototype.footer;
    /** @type {?} */
    CardBgComponent.prototype.shadow;
}
