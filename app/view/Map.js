Ext.define('CarSafari.view.Map', {
    extend: 'Ext.Map',
    xtype: 'carsafari-map',

    mapOptions: {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
        },
        zoom: 15
    }
});
