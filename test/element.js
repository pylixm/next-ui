module("Element.js", {teardown: function () {
    var comps = app.content();
    var child;
    for (var i = 0; i < comps.count(); i++) {
        child = comps.getItem(i);
        child.destroy();
    }
}
});

nx.define('dom_test', nx.ui.Component,{
    view: {
        props: {
            'id': 'test'
        },
        content: [
            {
                name: "hiddenbutton",
                tag: "button",
                props: {style: {visibility: "hidden",width:"5px"},id:1}
            },
            {
                name: "button",
                tag: "button",
                props: {id:2}
            },
            {
                name: "button1",
                tag: "button",
                props: {id:3}
            },
            {
                name: "button2",
                tag: "button",
                props: {id:4}
            }
        ]
    }
});


recTestData1 = {rec1: {top: 10, bottom: 30, left: 10, right: 30}, rec2: {left: 40, right: 60, top: 10, bottom: 30}}       //并列 不相交
recTestData2 = {rec1: {top: 10, bottom: 30, left: 10, right: 30}, rec2: {left: 40, right: 60, top: 40, bottom: 70}}       //不并列 不相交
recTestDate3 = {rec1: {top: 10, bottom: 40, left: 10, right: 30}, rec2: {left: 25, right: 50, top: 15, bottom: 30}}       //并列 相交
recTestDate4 = {rec1: {top: 20, bottom: 40, left: 10, right: 30}, rec2: {left: 20, right: 50, top: 10, bottom: 50}}       //并列 相交
recTestDate5 = {rec1: {top: 10, bottom: 20, left: 10, right: 30}, rec2: {left: 10, right: 30, top: 20, bottom: 50}}       //垂直 相交
recTestDate6 = {rec1: {top: 10, bottom: 30, left: 10, right: 30}, rec2: {left: 10, right: 30, top: 20, bottom: 50}}       //垂直 相交
recTestDate7 = {rec1: {top: 10, bottom: 30, left: 10, right: 30}, rec2: {left: 25, right: 50, top: 15, bottom: 50}}        //斜相交
recTestDate8 = {rec1: {top: 10, bottom: 50, left: 10, right: 50}, rec2: {left: 20, right: 40, top: 20, bottom: 40}}       //contain

test('method getRoot', function () {
    var obj = new dom_test();
    obj.attach(app);
    var result = obj.view().dom().getRoot()
    if (result.getElementsByTagName("body")) {
        ok(true)
    }
    else ok(faile)
    obj.destroy()
});

test('method getDocument', function () {
    var obj = new dom_test();
    obj.attach(app);
    var result = obj.view().dom().getDocument()
    if (result)
        ok(true)
    else
        ok(false)
    obj.destroy()
});

test('method getWindow', function () {
    var obj = new dom_test();
    obj.attach(app);
    var result = obj.view().dom().getWindow()
    if (result)
        ok(true)
    else
        ok(false)
    obj.destroy()
});

test('method toggleClass', function () {
    var obj = new dom_test();
    obj.attach(app);
    obj.resolve('button').dom().toggleClass('toggle');
    ok(obj.resolve('button').dom().hasClass('toggle'), 'toggle class not exists');
    equal(obj.resolve('button').dom().$dom.className,'toggle','check dom after toogle')
    //obj.resolve('button').dom().$dom.cla
    obj.resolve('button').dom().toggleClass('toggle');
    ok(!obj.resolve('button').dom().hasClass('toggle'), 'toggle existing class');
    equal(obj.resolve('button').dom().$dom.className,'','check dom after toogle')
    obj.destroy();
});

test('method show', function () {

    var obj = new dom_test();
    obj.attach(app);
    obj.resolve('button').dom().show();
    ok(true)
    obj.destroy();
});

test('method hide', function () {
    var obj = new dom_test();
    obj.attach(app);
    obj.resolve('button').dom().hide();
    ok(true)
    obj.destroy();
});

test('method set/get/remove/Attribute', function () {
    var obj = new dom_test();
    obj.attach(app);
    obj.view().dom().setAttribute('test','test');
    result = obj.view().dom().getAttribute('test')
    ok(result=='test')
    obj.view().dom().removeAttribute('test')
    result = obj.view().dom().getAttribute('test')
    ok(result==null)
    obj.destroy();
});

test('method set/get/text', function () {
    var obj = new dom_test();
    obj.attach(app);
    obj.resolve('button').dom().setText('text')
    result = obj.resolve('button').dom().getText('text')
    ok(result=='text')
    obj.destroy();
});

test('method set/get/html', function () {
    var obj = new dom_test();
    obj.attach(app);
    obj.resolve('button').dom().setHtml("<test>1</test>");
    result = obj.resolve('button').dom().getHtml()
    ok(result=='<test>1</test>')
    obj.destroy();
});

test('method has/add/delete/class', function () {
    var obj = new dom_test();
    obj.attach(app);

    ok(!obj.view().dom().hasClass('qw'))
    obj.view().dom().addClass('qw')
    ok(obj.view().dom().hasClass('qw'))
    obj.view().dom().removeClass('qw')
    ok(!obj.view().dom().hasClass('qw'))
    obj.destroy();
});

test('method toggle class', function () {
    var obj = new dom_test();
    obj.attach(app);
    if(obj.view().dom().hasClass('test'))
    {
        obj.view().dom().toggleClass('test')
        ok(!obj.view().dom().hasClass('test'))
    }

    if(!obj.view().dom().hasClass('test'))
    {
        obj.view().dom().toggleClass('test')
        ok(obj.view().dom().hasClass('test'))
    }

    if(obj.view().dom().hasClass('test'))
    {
        obj.view().dom().toggleClass('test')
        ok(!obj.view().dom().hasClass('test'))
    }
    obj.view().dom().removeClass('test')
    obj.destroy();
});


test('method set/getStyle', function () {
    var obj = new dom_test();
    obj.attach(app);
    obj.resolve('button2').dom().setStyle('width',100)
    equal(obj.resolve('button2').dom().getStyle('width'),'100px')
    obj.destroy();
});

test('method set/getStyle(s)', function () {
    var obj = new dom_test();
    obj.attach(app);
    obj.resolve('button2').dom().setStyle('width',100)
    equal(obj.resolve('button2').dom().getStyle('width'),'100px')
    obj.resolve('button2').dom().setStyles({"height":30,"text-align":"left"})
    equal(obj.resolve('button2').dom().getStyle('height'),'30px')
    console.log(obj.resolve('button2').dom().$dom);
    equal(obj.resolve('button2').dom().getStyle('text-align'),'left')
    obj.resolve('button2').dom().removeStyle("width")
    obj.resolve('button2').dom().removeStyle("height")
    obj.resolve('button2').dom().removeStyle("text-align")
    notEqual(obj.resolve('button2').dom().getStyle('width'),'100px')
    obj.destroy();
});

test('method focus/blur', function () {
    var obj = new dom_test();
    obj.attach(app);
    obj.resolve('button').dom().focus()
    //new nx.dom.Element()
    strictEqual(document.activeElement,obj.resolve('button').dom().$dom)
    obj.resolve('button').dom().blur()
    strictEqual(document.activeElement,document.body)
    obj.destroy();
});