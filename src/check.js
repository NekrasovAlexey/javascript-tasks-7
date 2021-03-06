'use strict';

exports.init = function () {
    Object.prototype.checkContainsKeys = function (keys) {
        var hasKeys = Object.keys(this);
        return keys.every(function (key) {
            return hasKeys.indexOf(key) > -1;
        });
    };
    deleteProp('checkContainsKeys');

    Object.prototype.checkHasKeys = function (keys) {
        var hasKeys = Object.keys(this);
        if (hasKeys.length != keys.length) {
            return false;
        }
        return hasKeys.every(function (key) {
            return keys.indexOf(key) > -1;
        });
    };
    deleteProp('checkHasKeys');

    Object.prototype.checkHasValues = function (values) {
        var keys = Object.keys(this);
        if (values.length != keys.length) {
            return false;
        }
        return keys.every(function (value) {
            return values.indexOf(value);
        });
    };
    deleteProp('checkHasValues');

    Object.prototype.checkContainsValues = function (values) {
        var keys = Object.keys(this);
        return values.every(function (key, thisArg) {
            return keys.indexOf(thisArg[key]);
        });
    };
    deleteProp('checkContainsValues');

    String.prototype.checkHasLength = function (length) {
        return this.length == length;
    };
    Array.prototype.checkHasLength = function (length) {
        return this.length == length;
    };

    Object.prototype.checkHasValueType = function (key, type) {
        if (this.hasOwnProperty(key)) {
            var field = this[key];
            //Не уверен, что все нужно,
            // т.к. вроде все поддерживаемые типы должны проверяться по конструктору,
            // но хуже не будет, я думаю
            return field.constructor === type || field instanceof type || typeof field === type;
        }
        console.log('Нет такого поля');
    };
    deleteProp('checkHasValueType');

    Function.prototype.checkHasParamsCount = function (count) {
        return this.length == count;
    };

    String.prototype.checkHasWordsCount = function (count) {
        return this.trim().split(/ +/).length == count;
    };

    function deleteProp(prop) {
        String.prototype[prop] = undefined;
        Number.prototype[prop] = undefined;
        Function.prototype[prop] = undefined;
        Boolean.prototype[prop] = undefined;
        Date.prototype[prop] = undefined;
    }
};
