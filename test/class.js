module("class.js");

nx.define('test.MyStaticClass', {
    static: true,
    properties: {
        staticProp: 'static!'
    },
    methods: {
        staticMethod: function () {
            return 'static!!'
        }
    }
});

nx.define('test.MyBaseClass', {
    events: ['event1', 'event2', 'event3'],
    statics: {
        static1: 'test'
    },
    properties: {
        prop1: 1,
        prop2: {
            value: 'foo'
        },
        prop3: {
            get: function () {
                return 'bar';
            }
        },
        prop4: {
            value: false
        },
        prop5: {
            get: function () {
                return this._prop5;
            },
            set: function (value) {
                this._prop5 = value;
            }
        },
        prop6: {
            get: function () {
                return this._prop5 + '!';
            }
        }
    },
    methods: {
        init: function (v) {
            this._value = v;
        },
        method1: function () {
            return 'hello';
        },
        method2: function () {
            return this.prop2();
        },
        method3: function () {
            return this.get('prop3');
        },
        method4: function (val) {
            this.prop4(val);
        },
        method5: function (val) {
            this.set('prop5', val);
        }
    }
});

nx.define('test.MyChildClass', test.MyBaseClass, {
    events: ['event1', 'event4'],
    properties: {
        prop1: 5,
        prop7: {
            value: 'new prop'
        }
    },
    methods: {
        init: function (v) {
            this.inherited(v + 1);
        },
        method1: function () {
            return 'world';
        },
        method4: function (val) {
            this.inherited(val + '!!');
        },
        method6: function () {
            this.set('prop7', 'new value');
        }
    }
});

test('define a class', function () {
    var base = new test.MyBaseClass(1);
    var child = new test.MyChildClass(5);

    ok(base._value === 1, 'base ctor');
    ok(base.__events__.length === 3, 'base events');
    ok(base.__properties__.length === 6, 'base properties');
    ok(base.__methods__.length === 6, 'base methods');
    ok(test.MyBaseClass.static1 === 'test', 'base statics');

    ok(child._value === 6, 'child ctor');
    ok(child.__events__.length === 4, 'child events');
    ok(child.__properties__.length === 7, 'child properties');
    ok(child.__methods__.length === 7, 'child methods');
});

test('class events', function () {
    var base = new test.MyBaseClass();
    var child = new test.MyBaseClass();
    var h1, h2, h3, h4, h5, h6, h7, h8, h9;
    var n1 = 0, n2 = 0, n3 = 0, n4 = 0, n5 = 0, n6 = 0, n7 = 0, n8 = 0, n9 = 0;

    base.on('event1', h1 = function (sender, event) {
        n1 = event;
    });
    base.fire('event1', 99);
    base.on('event2', h2 = function (sender, event) {
        n2++;
    });
    base.off('event2', h2);
    base.fire('event2');

    base.upon('event3', h3 = function (sender, event) {
        n3++;
    });

    base.fire('event3');
    base.upon('event3', h4 = function (sender, event) {
        n4++;
    });
    base.fire('event3');

    base.on('event2', h5 = function (sender, event) {
        n5++;
    });

    base.on('event2', h6 = function (sender, event) {
        n6++;
    });

    base.upon('event2', h7 = function (sender, event) {
        n7++;
    });

    base.fire('event2');

    base.off('event2', h5);

    base.fire('event2');

    child.on('event4', h8 = function (sender, event) {
        n8++;
    });

    child.on('event1', h9 = function (sender, event) {
        n9++;
    });

    child.fire('event4');
    child.fire('event1');

    ok(n1 == 99, 'on an event handler');
    ok(n2 == 0, 'off an event handler');
    ok(n3 == 1, 'upon an event handler');
    ok(n3 == 1 && n4 == 1, 'upon another event handler');
    ok(n5 == 1 && n6 == 2 && n7 == 2, 'mix multiple event handlers');
    ok(n8 == 1 && n9 == 1, 'inherit event handlers');
});

test('class properties', function () {
    var base = new test.MyBaseClass();
    var child = new test.MyChildClass();
    base.prop4(true);
    base.prop5('hi');

    ok(base.prop1() === 1, 'simple default value');
    ok(base.prop2() === 'foo', 'complex default value');
    ok(base.prop3() === 'bar', 'simple getter');
    ok(base.prop4() === true, 'simple setter');
    ok(base.prop5() === 'hi', 'getter and setter');
    ok(base.prop6() === 'hi!', 'dependent getter');
    ok(child.prop1() === 5, 'inherit property');
    ok(child.prop7() === 'new prop', 'new property');
});

test('class methods', function () {
    var base = new test.MyBaseClass();
    var child = new test.MyChildClass();

    base.method4('oh');
    child.method4('oh');
    child.method6();

    ok(base.method1() === 'hello', 'simple method');
    ok(base.prop4() === 'oh', 'method with property');
    ok(child.method1() === 'world', 'override a method');
    ok(child.prop4() === 'oh!!', 'override a method');
});

test('static class', function () {
    var v1, v2;

    v1 = test.MyStaticClass.staticProp();
    test.MyStaticClass.staticProp('123');
    v2 = test.MyStaticClass.staticProp();

    ok(nx.is(test.MyStaticClass, 'Function'), 'define static class');
    ok(test.MyStaticClass.__static__ === true, 'static indicator');
    ok(v1 === 'static!' && v2 === '123', 'static prop');
    ok(test.MyStaticClass.staticMethod() === 'static!!', 'static method');
    throws(function () {
        new test.MyStaticClass()
    }, 'prevent instantiation');

    throws(function () {
        var MyClass = nx.define(test.MyStaticClass);
    }, 'prevent inheritance');
});