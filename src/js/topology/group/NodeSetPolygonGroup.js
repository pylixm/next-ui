(function (nx, global) {


    /**
     * Polygon shape group class
     * @class nx.graphic.Topology.PolygonGroup
     * @extend nx.graphic.Topology.GroupItem
     * @module nx.graphic.Topology.Group
     *
     */

    nx.define('nx.graphic.Topology.NodeSetPolygonGroup', nx.graphic.Topology.GroupItem, {
        events: ['dragGroupStart', 'dragGroup', 'dragGroupEnd', 'clickGroupLabel'],
        view: {
            type: 'nx.graphic.Group',
            props: {
                'class': 'group'
            },
            content: [
                {
                    name: 'shape',
                    type: 'nx.graphic.Polygon',
                    props: {
                        'class': 'bg'
                    },
                    events: {
                        'mousedown': '{#_mousedown}',
                        'dragstart': '{#_dragstart}',
                        'dragmove': '{#_drag}',
                        'dragend': '{#_dragend}'
                    }
                },
                {
                    type: 'nx.graphic.Group',
                    content: [
                        {
                            name: 'minus',
                            type: 'nx.graphic.Group',
                            content: {
                                name: 'minusIcon',
                                type: 'nx.graphic.Icon',
                                props: {
                                    iconType: 'collapse'
                                }
                            },
                            events: {
                                'click': '{#_collapse}'
                            }
                        },
                        {
                            name: 'nodeIcon',
                            type: 'nx.graphic.Group',
                            content: {
                                name: 'nodeIconImg',
                                type: 'nx.graphic.Icon',
                                props: {
                                    iconType: 'nodeSet',
                                    scale: 1
                                }
                            }
                        },
                        {
                            name: 'labelContainer',
                            type: 'nx.graphic.Group',
                            content: {
                                name: 'label',
                                type: 'nx.graphic.Text',
                                props: {
                                    'class': 'nodeSetGroupLabel',
                                    text: '{#label}',
                                    style: {
                                        'alignment-baseline': 'central',
                                        'text-anchor': 'start',
                                        'font-size': 12
                                    }
                                },
                                events: {
                                    'click': '{#_clickLabel}'
                                }
                            }
                        }
                    ]
                },
//                {
//                    name: 'bg',
//                    type: 'nx.graphic.Rect',
//                    props: {
//                        fill: '#f00',
//                        'opacity': '0.1'
//                    }
//                }

            ],
            events: {
                'mouseenter': '{#_mouseenter}',
                'mouseleave': '{#_mouseleave}'
            }
        },
        properties: {
            nodeSet: {},
            topology: {},
            opacity: {
                set: function (value) {
                    var opacity = Math.max(value, 0.1);
                    this.view('shape').dom().setStyle('opacity', opacity);
                    this.view('minus').dom().setStyle('opacity', opacity);
                    this.view('nodeIcon').dom().setStyle('opacity', opacity);
                    this.view('labelContainer').dom().setStyle('opacity', opacity);
                    this._opacity = value;
                }
            }
//            color: {
//                set: function (value) {
//                    var text = this.view('labelContainer');
//                    text.view().dom().setStyle('fill', value);
//                    var shape = this.view('shape');
//                    shape.sets({
//                        fill: value
//                    });
//                    shape.dom().setStyle('stroke', value);
//                    this._color = value;
//                }
//            }
        },
        methods: {
            draw: function () {
                var topo = this.topology();
                var stageScale = topo.stageScale();
                var translate = {
                    x: topo.matrix().x(),
                    y: topo.matrix().y()
                };

                if (this.nodes().count() === 0) {
                    return;
                }

                this.setTransform(0, 0);

                var vectorArray = [];
                this.nodes().each(function (node) {
                    if (node.visible()) {
                        vectorArray.push({x: node.model().x(), y: node.model().y()});
                    }
                });
                var shape = this.view('shape');
                shape.sets({
                    fill: this.color()
                });
                shape.dom().setStyle('stroke', this.color());
                //
                shape.nodes(vectorArray);

                var bound = topo.getInsideBound(shape.getBound());
                bound.left -= translate.x;
                bound.top -= translate.y;
                bound.left *= stageScale;
                bound.top *= stageScale;
                bound.width *= stageScale;
                bound.height *= stageScale;

//                this.view('bg').sets({
//                    x: bound.left,
//                    y: bound.top,
//                    width: bound.width,
//                    height: bound.height
//                });

                var minus = this.view('minus');
                var label = this.view('label');
                var nodeIcon = this.view('nodeIcon');
                var nodeIconImg = this.view('nodeIconImg');
                var labelContainer = this.view('labelContainer');


                if (topo.showIcon() && topo.revisionScale() == 1) {

                    shape.dom().setStyle('stroke-width', 60 * stageScale);


                    nodeIconImg.set('iconType', this.nodeSet().iconType());
                    nodeIconImg.set('color', this.color());

                    var iconSize = nodeIconImg.size();

                    minus.setTransform(bound.left + bound.width / 2, bound.top - iconSize.height * stageScale / 2 - 22 * stageScale, 1 * stageScale);

                    nodeIcon.visible(true);
                    nodeIcon.setTransform(bound.left + bound.width / 2 + 10 * stageScale + iconSize.width * stageScale / 2, bound.top - iconSize.height * stageScale / 2 - 25 * stageScale, 0.7 * stageScale);

                    label.sets({
                        x: bound.left + bound.width / 2 + 12 * stageScale + iconSize.width * stageScale,
                        y: bound.top - iconSize.height * stageScale / 2 - 25 * stageScale
                    });
                    label.view().dom().setStyle('font-size', 18 * stageScale);
                    labelContainer.view().dom().setStyle('fill', this.color());

                } else {

                    shape.dom().setStyle('stroke-width', 30 * stageScale);

                    minus.setTransform(bound.left + bound.width / 2, bound.top - 30 * stageScale / 2, 1.5 * stageScale);
                    nodeIcon.visible(false);

                    label.sets({
                        x: bound.left + bound.width / 2 + 12 * stageScale,
                        y: bound.top - 30 * stageScale / 2
                    });
                    label.view().dom().setStyle('font-size', 18 * stageScale);
                    labelContainer.view().dom().setStyle('fill', this.color());
                }


                this.view('minusIcon').color(this.color());

            },
            _clickLabel: function (sender, event) {
                /**
                 * Fired when click group label
                 * @event clickGroupLabel
                 * @param sender{Object} trigger instance
                 * @param event {Object} original event object
                 */
                this.fire('clickGroupLabel');
            },
            _mousedown: function (sender, event) {
                event.captureDrag(this.view('shape'));
            },
            _dragstart: function (sender, event) {
                this.blockDrawing(true);
                /**
                 * Fired when start drag a group
                 * @event dragGroupStart
                 * @param sender{Object} trigger instance
                 * @param event {Object} original event object
                 */
                this.fire('dragGroupStart', event);
            },
            _drag: function (sender, event) {
                /**
                 * Fired when dragging a group
                 * @event dragGroup
                 * @param sender{Object} trigger instance
                 * @param event {Object} original event object
                 */
                this.fire('dragGroup', event);
                this._updateNodesPosition(event.drag.delta[0], event.drag.delta[1]);


                var stageScale = this.topology().stageScale();
                this.move(event.drag.delta[0] * stageScale, event.drag.delta[1] * stageScale);
            },
            _dragend: function (sender, event) {
                this.blockDrawing(false);
//                this.draw();
                /**
                 * Fired finish dragging
                 * @event dragGroupEnd
                 * @param sender{Object} trigger instance
                 * @param event {Object} original event object
                 */
                this.fire('dragGroupEnd', event);

            },
            _updateNodesPosition: function (x, y) {
                var stageScale = this.topology().stageScale();
                this.nodes().each(function (node) {
                    node.move(x * stageScale, y * stageScale);
                });
            },
            _collapse: function () {
                var nodeSet = this.nodeSet();
                if (nodeSet) {
                    nodeSet.collapsed(true);
                }
            },
            _mouseenter: function (sender, event) {
                this.__opacity = this.opacity();
                this.opacity(0.6);
            },
            _mouseleave: function (sender, event) {
                if (this.__opacity) {
                    this.opacity(this.__opacity);
                }
            },
            dispose: function () {
                this.inherited();
            }
        }
    });


})(nx, nx.global);






