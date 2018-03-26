"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var data_store_1 = require("@bigcommerce/data-store");
var actionTypes = require("./billing-address-action-types");
var BillingAddressActionCreator = (function () {
    function BillingAddressActionCreator(checkoutClient) {
        this._checkoutClient = checkoutClient;
    }
    BillingAddressActionCreator.prototype.updateAddress = function (address, options) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            observer.next(data_store_1.createAction(actionTypes.UPDATE_BILLING_ADDRESS_REQUESTED));
            _this._checkoutClient.updateBillingAddress(address, options)
                .then(function (_a) {
                var _b = _a.body, data = (_b === void 0 ? {} : _b).data;
                observer.next(data_store_1.createAction(actionTypes.UPDATE_BILLING_ADDRESS_SUCCEEDED, data));
                observer.complete();
            })
                .catch(function (response) {
                observer.error(data_store_1.createErrorAction(actionTypes.UPDATE_BILLING_ADDRESS_FAILED, response));
            });
        });
    };
    return BillingAddressActionCreator;
}());
exports.default = BillingAddressActionCreator;
//# sourceMappingURL=billing-address-action-creator.js.map