Ext.define('CarSafari.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    id: 'mainview',
    requires: [
        'Ext.TitleBar',
        'CarSafari.view.Map',
        'CarSafari.view.List'
    ],
    config: {
        tabBarPosition: 'bottom',
        tabbar: {
            id: 'tabbar'
        },
        layout: {
            type: 'card',
            animation: {
                type: 'slide'
            }
        },
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                id: 'titlebar',
                title: 'CarSafari',
                style: 'background: #ff5500;',
                items: [{
                    xtype: 'button',
                    align: 'left',
                    iconCls: 'arrow_left',
                    iconMask: true,
                    ui: 'plain',
                    hidden: true,
                    id: 'backbutton',
                    handler: function () {
                        Ext.getCmp('details').hide();
                    }
                }]
            },
            {
                xtype: 'container',
                title: 'Map',
                layout: 'fit',
                iconCls: 'maps',
                items: [
                    {
                        xtype: 'carsafari-map'
                    },
                    {
                        xtype: 'carsafari-details',
                        hidden: true
                    }
                ]
            },
            {
                xtype: 'container',
                title: 'List',
                layout: 'fit',
                iconCls: 'list',
                items: [
                    {
                        xtype: 'carsafari-list'
                    }
                ]
            }
        ]
    }
});
