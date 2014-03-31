(function (nx, util, global) {
    /**
     * Node class
     * @class nx.graphic.Topology.Node
     * @extend nx.graphic.Topology.AbstractNode
     * @module nx.graphic.Topology
     */
    nx.define('nx.graphic.Topology.Node', nx.graphic.Topology.AbstractNode, {
        events: ['pressNode', 'clickNode', 'enterNode', 'leaveNode', 'dragNodeStart', 'dragNode', 'dragNodeEnd', 'selectNode'],
        properties: {
            /**
             * Get/set node's position
             * @property posotion
             */
            position: {
                get: function () {
                    return {
                        x: this._x || 0,
                        y: this._y || 0
                    };
                },
                set: function (obj) {
                    var isModified = false;
                    var model = this.model();
                    if (obj.x != null) {
                        if (!this._lockXAxle && this._x !== obj.x) {
                            if (this._x === undefined) {
                                this._x = obj.x;
                            } else {
                                this._x = obj.x;
                                model.set("x", this.projectionX().invert(obj.x));
                            }
                            this.notify("x");
                            isModified = true;
                        }
                    }

                    if (obj.y != null) {
                        if (!this._lockYAxle && this._y !== obj.y) {

                            if (this._y === undefined) {
                                this._y = obj.y;
                            } else {
                                this._y = obj.y;
                                model.set("y", this.projectionY().invert(obj.y));
                            }
                            this.notify("y");
                            isModified = true;
                        }
                    }

                    if (isModified) {
                        this.view().setTransform(this._x, this._y);
                        this.notify('vector');
                    }
                    return isModified;
                }
            },
            /**
             * Set node's scale
             * @property scale {Number}
             */
            scale: {
                set: function (value) {
                    this.view('graphic').setTransform(null, null, value);
                }
            },
            /**
             * Set/get the radius of dot
             * @property radius {Number}
             */
            radius: {
                get: function () {
                    return this._radius !== undefined ? this._radius : 4;
                },
                set: function (value) {
                    if (this._radius !== value) {
                        this._radius = value;
                        this.view('dot').set('r', value);
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            /**
             * Node icon's type
             * @method iconType {String}
             */
            iconType: {
                value: 'unknown'
            },
            /**
             * Node's label font size
             * @property fontSize {Number}
             */
            fontSize: {
                value: 12
            },
            /**
             * Get node's label
             * @property label
             */
            label: {
                set: function (label) {
                    var el = this.resolve('label');
                    if (label !== undefined) {
                        el.set('text', label);
                        el.append();
                        this.calcLabelPosition();
                    } else {
                        el.remove();
                    }
                    this._label = label;
                }
            },
            /**
             * Set node's label visible
             */
            labelVisible: {
                set: function (value) {
                    var el = this.resolve('label');
                    el.visible(value);
                    this._labelVisible = value;
                }
            },
            /**
             * Show/hide node's icon
             * @property showIcon
             */
            showIcon: {
                set: function (value) {
                    var icon = this.resolve('iconContainer');
                    var dot = this.resolve('dot');
                    if (value) {
                        icon.set('iconType', this.iconType());
                        icon.append();
                        dot.remove();
                    } else {
                        icon.remove();
                        dot.append();
                    }

                    this._showIcon = value;
                    this.calcLabelPosition();
                    this._setSelectedRadius();
                }
            },

            /**
             * Get/set node's selected statues
             * @property selected
             */
            selected: {
                get: function () {
                    return this._selected || false;
                },
                set: function (value) {
                    if (this._selected != value) {
                        var el = this.resolve('selectedBG');
                        if (value) {
                            el.append();
                        } else {
                            el.remove();
                        }

                        this._selected = value;
                        this._setSelectedRadius();
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            /**
             * Set the dot's color
             * @property color
             */
            color: {
                set: function (value) {
                    this.$('graphic').setStyle('fill', value);
                    this.$('dot').setStyle('fill', value);
                    this.$('label').setStyle('fill', value);
                }
            },
            /**
             * Enable smart label feature
             * @property enableSmartLabel
             */
            enableSmartLabel: {
                value: true
            },
            enable: {
                get: function () {
                    return this._enable != null ? this._enable : true;
                },
                set: function (value) {
                    this._enable = value;
                    if (value) {
                        this.root().removeClass('disable');
                    } else {
                        this.root().addClass('disable');
                    }
                }
            }
        },
        view: {
            type: 'nx.graphic.Group',
            props: {
                'class': 'node'
            },
            content: [
                {
                    name: 'label',
                    type: 'nx.graphic.Text',
                    props: {
                        'class': 'node-label',
                        'alignment-baseline': 'central',
                        x: 0,
                        y: 12,
                        'font-size': '{#fontSize}'
                    }
                },
                {
                    name: 'disableLabel',
                    type: 'nx.graphic.Text',
                    props: {
                        'class': 'node-disable-label',
                        'alignment-baseline': 'central',
                        x: 12,
                        y: 12,
                        'font-size': '{#fontSize}'
                    }
                },
                {
                    name: 'selectedBG',
                    type: 'nx.graphic.Circle',
                    props: {
                        x: 0,
                        y: 0,
                        'class': 'selectedBG'
                    }
                },
                {
                    type: 'nx.graphic.Group',
                    name: 'graphic',
                    content: [

                        {
                            name: 'dot',
                            type: 'nx.graphic.Circle',
                            props: {
                                r: '4',
                                cx: 0,
                                cy: 0,
                                'class': 'dot'
                            }
                        },
                        {
                            name: 'iconContainer',
                            type: 'nx.graphic.Group',
                            content: [
                                {
                                    name: 'icon',
                                    type: 'nx.graphic.Icon',
                                    props: {
                                        'class': 'icon',
                                        iconType: '{#iconType}'
                                    }
                                }
                            ]
                        }
                    ],
                    events: {
                        'mousedown': '{#_mousedown}',
                        'mouseup': '{#_mouseup}',
                        'touchstart': '{#_mousedown}',
                        'touchend': '{#_mouseup}',

                        'mouseenter': '{#_mouseenter}',
                        'mouseleave': '{#_mouseleave}',

                        'dragstart': '{#_dragstart}',
                        'dragmove': '{#_drag}',
                        'dragend': '{#_dragend}'
                    }
                }


            ]
        },
        methods: {
            setModel: function (model) {
                this.inherited(model);
            },
            cssMoveTo: function (x, y, callback) {
                var el = this.view();
                el.upon('transitionend', function () {
                    this._x = x;
                    this._y = y;
                    this.notify('position');

                    this.model().set("position", {
                        x: this.projectionX().invert(x),
                        y: this.projectionY().invert(y)
                    });
                }, this);
                this.view().setTransform(x, y, null, 0.5);
            },
            _setSelectedRadius: function () {

                if (this.selected()) {
                    var radius;
                    var el = this.resolve('selectedBG');
                    if (this.showIcon()) {
                        var size = this.resolve('icon').size();
                        radius = Math.max(size.height, size.width) / 2;
                    } else {
                        radius = this.radius();
                    }
                    el.set('r', radius * 1.5 * this.scale());
                }
            },
            _mousedown: function (sender, event) {
                if (this.enable()) {
                    this._prevPosition = this.position();
                    event.captureDrag(this.resolve('graphic'));
                    this.fire('pressNode', event);
                }
            },
            _mouseup: function (sender, event) {
                if (this.enable()) {
                    var _position = this.position();
                    if (this._prevPosition && _position.x === this._prevPosition.x && _position.y === this._prevPosition.y) {
                        /**
                         * Fired when click a node
                         * @event clickNode
                         * @param sender{Object} trigger instance
                         * @param event {Object} original event object
                         */
                        this.fire('clickNode', event);
                    }
                }
            },
            _mouseenter: function (sender, event) {
                if (this.enable()) {
                    if (!this.__enter) {
                        /**
                         * Fired when mouse enter a node
                         * @event enterNode
                         * @param sender{Object} trigger instance
                         * @param event {Object} original event object
                         */
                        this.fire('enterNode', event);
                        this.__enter = true;
                    }
                }


            },
            _mouseleave: function (sender, event) {
                if (this.enable()) {
                    if (this.__enter) {
                        /**
                         * Fired when mouse leave a node
                         * @event leaveNode
                         * @param sender{Object} trigger instance
                         * @param event {Object} original event object
                         */
                        this.fire('leaveNode', event);
                        this.__enter = false;
                    }
                }
            },
            _dragstart: function (sender, event) {
                if (this.enable()) {
                    /**
                     * Fired when start drag a node
                     * @event dragNodeStart
                     * @param sender{Object} trigger instance
                     * @param event {Object} original event object
                     */
                    this.fire('dragNodeStart', event);
                }
            },
            _drag: function (sender, event) {
                if (this.enable()) {
                    /**
                     * Fired when drag a node
                     * @event dragNode
                     * @param sender{Object} trigger instance
                     * @param event {Object} original event object
                     */
                    this.fire('dragNode', event);
                }
            },
            _dragend: function (sender, event) {
                if (this.enable()) {
                    /**
                     * Fired when finish a node
                     * @event dragNodeEnd
                     * @param sender{Object} trigger instance
                     * @param event {Object} original event object
                     */
                    this.fire('dragNodeEnd', event);
                    this._updateConnectedNodeLabelPosition();
                }
            },

            _updateConnectedNodeLabelPosition: function () {
                this.calcLabelPosition();
                this.eachConnectedNodes(function (node) {
                    node.calcLabelPosition();
                });
            },
            /**
             * Set label to a node
             * @method calcLabelPosition
             */
            calcLabelPosition: function () {
                if (this.enableSmartLabel()) {
                    if (this._centralizedTextTimer) {
                        clearTimeout(this._centralizedTextTimer);
                    }
                    this._centralizedTextTimer = setTimeout(function () {
                        this._centralizedText();
                        //this._setHintPosition();
                    }.bind(this), 100);
                } else {
                    this.updateByMaxObtuseAngle(90);
                }
            },
            _centralizedText: function () {


                //
                var vertex = this.model();

                if (vertex === undefined) {
                    return;
                }

                var vectors = [];

                // get all lines

                vertex.eachDirectedEdge(function (edge) {
                    vectors.push(edge.line().dir);
                });

                vertex.eachReverseEdge(function (edge) {
                    vectors.push(edge.line().dir.negate());
                });


                //sort line by angle;
                vectors = vectors.sort(function (a, b) {
                    return a.circumferentialAngle() - b.circumferentialAngle();
                });


                // get the min incline angle

                var startVector = new nx.math.Vector(1, 0);
                var maxAngle = 0, labelAngle;

                if (vectors.length === 0) {
                    labelAngle = 90;
                } else {
                    //add first item to vectors, for compare last item with first

                    vectors.push(vectors[0].rotate(359.9));

                    //find out the max incline angle
                    for (var i = 0; i < vectors.length - 1; i++) {
                        var inclinedAngle = vectors[i + 1].circumferentialAngle() - vectors[i].circumferentialAngle();
                        if (inclinedAngle < 0) {
                            inclinedAngle += 360;
                        }
                        if (inclinedAngle > maxAngle) {
                            maxAngle = inclinedAngle;
                            startVector = vectors[i];
                        }
                    }

                    // bisector angle
                    labelAngle = maxAngle / 2 + startVector.circumferentialAngle();

                    // if max that 360, reduce 360
                    labelAngle %= 360;
                }


                this._labelAngle = labelAngle;
                this.updateByMaxObtuseAngle(labelAngle);
            },
            /**
             * @method updateByMaxObtuseAngle
             * @method updateByMaxObtuseAngle
             * @param angle
             */
            updateByMaxObtuseAngle: function (angle) {

                var el = this.resolve('label');

                // find out the quadrant
                var quadrant = Math.floor(angle / 60);
                var anchor = 'middle';
                if (quadrant === 5 || quadrant === 0) {
                    anchor = 'start';
                } else if (quadrant === 2 || quadrant === 3) {
                    anchor = 'end';
                }

                //
                var size = this.getBound(true);
                var radius = Math.max(size.width / 2, size.height / 2) + (this.showIcon() ? 12 : 8);
                var labelVector = new nx.math.Vector(radius, 0).rotate(angle);


                el.set('x', labelVector.x);
                el.set('y', labelVector.y);
                //

                el.set('text-anchor', anchor);

            },
            /**
             * Get node bound
             * @param onlyGraphic {Boolean} is is TRUE, will only get graphic's bound
             * @returns {*}
             */
            getBound: function (onlyGraphic) {
                if (onlyGraphic) {
                    return this.resolve('graphic').getBound();
                } else {
                    return this.resolve('@root').getBound();
                }
            }
        }
    });
})(nx, nx.util, nx.global);