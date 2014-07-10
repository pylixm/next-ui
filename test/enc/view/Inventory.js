(function (nx, global) {

    ENC.TW.inventory = {
        generated: {
            convert: function (value) {
                return value ? 'tw-inventory-list-item tw-inventory-list-item-generated' : 'tw-inventory-list-item'
            }
        }
    };


    nx.define("ENC.TW.View.Inventory", nx.ui.Component, {
        events: [],
        view: {
            content: [
                {
                    tag: 'input',
                    props: {
                        'class': 'form-control tw-inventory-search',
                        value: '{controlVM.inventory.searchKey}',
                        placeholder: 'Search'
                    }
                },
                {
                    props: {
                        'class': 'tw-inventory-list'
                    },
                    content: {
                        tag: 'ul',
                        props: {

                            items: '{controlVM.inventory.devices}',
                            template: {
                                tag: 'li',
                                props: {
                                    'class': '{value.generated,converter=ENC.TW.inventory.generated}'
                                },
                                content: [
                                    {
                                        tag: 'span',
                                        props: {
                                            'class': 'tw-inventory-list-item-color',
                                            color: '{value.color}'
                                        }

                                    },
                                    {
                                        tag: 'span',
                                        props: {
                                            'class': '{value.deviceType,converter=ENC.TW.converter.icon}',
                                            type: '{value.deviceType}'
                                        }
                                    },
                                    {
                                        tag: 'span',
                                        props: {
                                            'class': 'tw-inventory-list-item-label',
                                            type: '{value.label}'
                                        },
                                        content: '{value.label}'
                                    },
                                    {
                                        tag: 'span',
                                        props: {
                                            'class': 'tw-inventory-list-item-info fa fa-info-circle'
                                        },
                                        events: {
                                            'click': '{#_showInfo}'
                                        }
                                    },
                                    {
                                        tag: 'span',
                                        props: {
                                            'class': 'tw-inventory-list-item-locate-node  fa fa-bullseye'
                                        },
                                        events: {
                                            'click': '{#owner.model.controlVM.inventory.locateNode}'
                                        }
                                    }
                                ],
                                events: {
                                    'click': '{#owner.model.controlVM.inventory.selectItem}',
                                    'mouseenter': '{#owner.model.controlVM.inventory.highlightItem}',
                                    'mouseleave': '{#owner.model.controlVM.inventory.recoverItem}'
                                }

                            }
                        }
                    }
                },
                {
                    name: 'info',
                    props: {
                        'class': 'tw-inventory-info'
                    },
                    content: [
                        {
                            tag: 'span',
                            props: {
                                'class': '{#item.deviceType,converter=ENC.TW.inventory.icon}'
                            }
                        },
                        {
                            tag: 'h1',
                            content: '{#item.label}'
                        },
                        {
                            tag: 'h3',
                            content: '{#item.deviceType}'
                        },
                        {
                            tag: 'label',
                            content: '{#item.ip}'
                        }
                    ]
                }
            ]
        },
        properties: {
            item: {}
        },
        methods: {
            _showInfo: function (sender, events) {
                var vertex = sender.model().value();
                this.item(vertex);
                var bound = sender.dom().getBound();
                this.view('info').dom().setStyles({
                    left: bound.left + 32,
                    top: bound.top - 20,
                    display: 'block'
                });
            }
        }
    });
})(nx, nx.global);