Ext.define('CarSafari.view.List', {
    extend: 'Ext.List',
    xtype: 'carsafari-list',

    config: {
        itemTpl: '<img src="{icon}" height="20">&nbsp;{title}',
        listeners: {
            select: function(list, record) {
                // debugger
                Ext.getCmp('details').setData(record.data).show();
                Ext.getCmp('mainview').setActiveItem(0);
            }
        }
    }
});
