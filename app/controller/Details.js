Ext.define('CarSafari.controller.Details', {
    extend: 'Ext.app.Controller',

    requires: [
        'CarSafari.view.Map',
        'CarSafari.view.List',
        'CarSafari.view.Details'
    ],

    config: {
        refs: {
            main: 'main',
            map: 'carsafari-map',
            list: 'carsafari-list',
        },
        control: {
            'map': {
                initialize: 'initMap',
                centerchange: 'onCenterChange'
            },
            'closeBtn': {
                tap: 'onMapBtnTap'
            }
        }
    },

    open: function (data) {
        var details = Ext.create('CarSafari.view.Details', {
            data: data
        });
    }

});
