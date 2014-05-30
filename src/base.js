/**
 * @module nx
 */

var nx = {
    VERSION: '0.7.0',
    DEBUG: false,
    global: (function () {
        return this;
    }).call(null)
};

(function (nx) {
    /**
     * @class nx
     * @static
     */


    var isArray = Array.isArray || function (target) {
        return target && target.constructor === Array;
    };

    /**
     * Extend target with properties from sources.
     * @method extend
     * @param target {Object} The target object to be extended.
     * @param source* {Object} The source objects.
     * @returns {Object}
     */
    nx.extend = function (target) {
        for (var i = 1, length = arguments.length; i < length; i++) {
            var arg = arguments[i];
            for (var key in arg) {
                if (arg.hasOwnProperty(key)) {
                    target[key] = arg[key];
                }
            }
        }

        return target;
    };

    /**
     * Iterate over target and execute the callback with context.
     * @method each
     * @param target {Object|Array|Iterable} The target object to be iterate over.
     * @param callback {Function} The callback function to execute.
     * @param context {Object} The context object which act as 'this'.
     */
    nx.each = function (target, callback, context) {
        if (target && callback) {
            if (target.__each__) {
                target.__each__(callback, context);
            }
            else {
                var length = target.length;
                if (length >= 0) {
                    for (var i = 0; i < length; i++) {
                        callback.call(context, target[i], i);
                    }
                }
                else {
                    for (var key in target) {
                        if (target.hasOwnProperty(key)) {
                            callback.call(context, target[key], key);
                        }
                    }
                }
            }
        }
    };

    /**
     * Shallow clone target object.
     * @method clone
     * @param target {Object|Array} The target object to be cloned.
     * @returns {Object} The cloned object.
     */
    nx.clone = function (target) {
        if (target) {
            if (target.__clone__) {
                return target.__clone__();
            }
            else {
                if (nx.is(target, 'Array')) {
                    return target.slice(0);
                }
                else {
                    var result = {};
                    for (var key in target) {
                        if (target.hasOwnProperty(key)) {
                            result[key] = target[key];
                        }
                    }

                    return result;
                }
            }
        }
        else {
            return target;
        }
    };

    /**
     * Check whether target is specified type.
     * @method is
     * @param target {Object} The target object to be checked.
     * @param type {String|Function} The type could either be a string or a class object.
     * @returns {Boolean}
     */
    nx.is = function (target, type) {
        if (target && target.__is__) {
            return target.__is__(type);
        }
        else {
            switch (type) {
                case 'Undefined':
                    return target === undefined;
                case 'Null':
                    return target === null;
                case 'Object':
                    return target && (typeof target === 'object');
                case 'String':
                case 'Boolean':
                case 'Number':
                case 'Function':
                    return typeof target === type.toLowerCase();
                case 'Array':
                    return isArray(target);
                default:
                    return target instanceof type;
            }
        }
    };

    /**
     * Get the specified property value of target.
     * @method get
     * @param target {Object} The target object.
     * @param name {String} The property name.
     * @returns {*} The value.
     */
    nx.get = function (target, name) {
        if (target) {
            if (target.__get__) {
                return target.__get__(name);
            }
            else {
                return target[name];
            }
        }
    };

    /**
     * Set the specified property of target with value.
     * @method set
     * @param target {Object} The target object.
     * @param name {String} The property name.
     * @param value {*} The value to be set.
     */
    nx.set = function (target, name, value) {
        if (target) {
            if (target.__set__) {
                target.__set__(name);
            }
            else {
                target[name] = value;
            }
        }
    };

    /**
     * Get all properties of target.
     * @method gets
     * @param target {Object} The target Object.
     * @returns {Object} An object contains all keys and values of target.
     */
    nx.gets = function (target) {
        if (target) {
            if (target.__gets__) {
                return target.__gets__();
            }
            else {
                var result = {};
                for (var key in target) {
                    if (target.hasOwnProperty(key)) {
                        result[key] = target[key];
                    }
                }
                return result;
            }
        }
    };

    /**
     * Set a bunch of properties for target.
     * @method sets
     * @param target {Object} The target object.
     * @param dict {Object} An object contains all keys and values to be set.
     */
    nx.sets = function (target, dict) {
        if (target && dict) {
            if (target.__sets__) {
                target.__sets__(dict);
            }
            else {
                for (var key in dict) {
                    if (dict.hasOwnProperty(key)) {
                        target[key] = dict[key];
                    }
                }
            }
        }
    };

    /**
     * Check whether target has specified property.
     * @method has
     * @param target {Object} The target object.
     * @param name {String} The property name.
     * @returns {Boolean}
     */
    nx.has = function (target, name) {
        if (target) {
            if (target.__has__) {
                return target.__has__(name);
            }
            else {
                return name in target;
            }
        }
        else {
            return false;
        }
    };

    /**
     * Compare target and source.
     * @method compare
     * @param target {Object} The target object.
     * @param source {Object} The source object.
     * @returns {Number} The result could be -1,0,1 which indicates the comparison result.
     */
    nx.compare = function (target, source) {
        if (target && target.__compare__) {
            return target.__compare__(source);
        }
        else {
            if (target === source) {
                return 0;
            }
            else if (target > source) {
                return 1;
            }
            else if (target < source) {
                return -1;
            }

            return 1;
        }
    };

    /**
     * Get value from target specified by a path and optionally set a value for it.
     * @method path
     * @param target {Object} The target object.
     * @param path {String} The path.
     * @param [value] {*} The value to be set.
     * @returns {*}
     */
    nx.path = function (target, path, value) {
        var result = target;
        if (path) {
            var tokens = path.split('.'), token,
                i = 0, length = tokens.length;

            if (value === undefined) {
                for (; result && i < length; i++) {
                    token = tokens[i];
                    if (result.__get__) {
                        result = result.__get__(token);
                    }
                    else {
                        result = result[token];
                    }
                }
            }
            else {
                length -= 1;
                for (; result && i < length; i++) {
                    token = tokens[i];
                    if (result.__get__) {
                        result = result.__get__(token);
                    }
                    else {
                        result = result[token] = result[token] || {};
                    }
                }

                token = tokens[i];
                if (result) {
                    if (result.__set__) {
                        result.__set__(token, value);
                    }
                    else {
                        result[token] = value;
                    }

                    result = value;
                }
            }
        }

        return result;
    };

})(nx);