Ext.define('CarSafari.view.Details', {
    extend: 'Ext.Container',
    xtype: 'carsafari-details',
    requires: [
        'Ext.Button'
    ],
    config: {
        id: 'details',
        layout: 'fit',
        fullscreen: true,
        scrollable: true,
        data: null,
        hidden: true,
        tpl: [
            '<div class="story">',
                '<div class="story-title">',
                    '<b>{title}</b>',
                '</div>',
                '<div class="story-content">',
                    '{content}',
                '</div>',
            '</div>'
        ].join(''),
        listeners: {
            show: 'onShow',
            hide: 'onHide'
        }
    },

    onShow: function() {
        Ext.getCmp('backbutton').show();
    },

    onHide: function() {
        Ext.getCmp('backbutton').hide();
    }
});
