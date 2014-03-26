(function (nx, util, global) {

    nx.define("nx.graphic.Topology.NeXtForceLayout", {
        properties: {
            topology: {}
        },
        methods: {
            process: function (graph, config, callback) {

                var topo = this.topology();
                var data = graph._originalData;
                var key = graph.identityKey();


                var _data = {nodes: data.nodes, links: []};
                var nodeIndexMap = {};
                nx.each(data.nodes, function (node, index) {
                    nodeIndexMap[node[key]] = index;
                });


                // if source and target is not number, force will search node
                nx.each(data.links, function (link) {
                    if (!nx.is(link.source, 'Object') && nodeIndexMap[link.source] !== undefined && !nx.is(link.target, 'Object') && nodeIndexMap[link.target] !== undefined) {
                        _data.links.push({
                            source: nodeIndexMap[link.source],
                            target: nodeIndexMap[link.target]
                        });
                    }
                });


                setTimeout(function () {


                    // force
                    var force = new nx.data.Force(topo.containerWidth(), topo.containerHeight());
                    force.setData(_data);

                    var step = 0;
                    while (++step < 300) {
                        force.tick();
                    }


                    topo._dataBound = graph.getBound(_data.nodes);

                    topo._setProjection(false, false);


                    var px = topo.projectionX();
                    var py = topo.projectionY();

                    topo.getLayer('links').hide();
                    topo.getLayer('links').fadeIn();


                    nx.each(_data.nodes, function (n, i) {
                        var id = n[key] || i;
                        var node = topo.getNode(id);
                        if (node) {
                            node.cssMoveTo(px.get(n.x), py.get(n.y));
                        } else {
                            console.log(n);
                        }
                    }, this);


                    setTimeout(function () {
                        topo.getLayer('links').show();
                        topo.getLayer('links').fadeIn();
                        topo.adjustLayout();
                        if (callback) {
                            callback.call(topo);
                        }
                    }, 500);


                }, 300);


            }
        }
    });
})(nx, nx.util, nx.global);