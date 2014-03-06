(function (nx) {
    var AbstractComponent = nx.ui.AbstractComponent;

    nx.define('nx.ui.Component', AbstractComponent, {
        properties: {
            model: {
                get: function () {
                    return this._model || this._inheritedModel;
                },
                set: function (value, inherited) {
                    if (inherited) {
                        this._inheritedModel = value;
                    }
                    else {
                        this._model = value;
                    }

                    this._innerComp.model(value, true);

                    this._content.each(function (c) {
                        if (!nx.is(c, 'String')) {
                            c.model(value, true);
                        }
                    });
                }
            }
        },
        methods: {
            init: function () {
                this.inherited();
                var view = this['@view'];
                if (view) {
                    var comp = this._innerComp = AbstractComponent.createComponent(view, this);
                    this.register('@root', comp.resolve('@root'));
                    this.register('@tag', comp.resolve('@tag'));
                    this.register('@comp', comp);
                }
            },
            view: function (name) {
                return this.resolve(name || '@comp');
            },
            get: function (name) {
                if (this.has(name)) {
                    return this.inherited(name);
                }
                else {
                    return this.view().get(name);
                }
            },
            set: function (name, value) {
                if (this.has(name)) {
                    this.inherited(name, value);
                }
                else {
                    this.view().set(name, value);
                    this.notify(name);
                }
            },
            onAttach: function (parent, index) {
                this.view().onAttach(parent, index);
            },
            onDetach: function () {
                this.view().onDetach(this.parent());
            },
            on: function (name, handler, context) {
                if (this.can(name)) {
                    this.inherited(name, handler, context);
                }
                else {
                    this.view().on(name, handler, context);
                }
            },
            upon: function (name, handler, context) {
                if (this.can(name)) {
                    this.inherited(name, handler, context);
                }
                else {
                    this.view().upon(name, handler, context);
                }
            },
            off: function (name, handler, context) {
                if (this.can(name)) {
                    this.inherited(name, handler, context);
                }
                else {
                    this.view().off(name, handler, context);
                }
            },
            dispose: function () {
                var innerComp = this._innerComp;
                if (innerComp) {
                    innerComp.dispose();
                }
                this._innerComp = null;
                this.inherited();
            }
        }
    });
})(nx);