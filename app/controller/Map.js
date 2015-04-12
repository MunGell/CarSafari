/**
 * @class
 * Controller class for interactive map page
 */
Ext.define('CarSafari.controller.Map', {
    extend: 'Ext.app.Controller',

    markers: [],

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
            details: 'carsafari-details',
            navview: 'navigationview'
        },
        control: {
            'map': {
                initialize: 'initMap',
                centerchange: 'onCenterChange'
            }
        }
    },

    init: function () {
        this.bufferedOnSearch = Ext.Function.createBuffered(this.doSearch, 1000);
        this.bufferedOnCenterChange = Ext.Function.createBuffered(this.getMapMarkers, 1000);
    },

    onCenterChange: function(me, map, center) {
        this.bufferedOnCenterChange(map, center.k, center.D, false);
    },

    clearMapMarkers: function() {
        Ext.Array.forEach(this.markers, function (marker) {
            marker.setMap(null);
        });
    },

    /**
     * @method
     * Loads the images store and drops images on the map
     *
     * @private
     * @param {}
     * @param {float} longitude of map center
     * @param {float} latitude of map center
     * @param {boolean} if set, then programmatically sets the center of the map
     * @return void
     */
    getMapMarkers: function(gMap, latitude, longitude, setCenter) {
        var me = this;

        me.clearMapMarkers();

        if (setCenter) {
            gMap.setCenter(new google.maps.LatLng(latitude, longitude));
        }

        Ext.getStore('attrationStore').load(function(records, operation, success) {
            if (!success) {
                return;
            }

            me.getList().setStore(Ext.getStore('attrationStore'));


            Ext.Array.forEach(records, function(record) {
                var item = record,

                    image = {
                        url: item.get('icon'),
                        size: new google.maps.Size(30, 34),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(0, 0)
                    };

                    marker = new google.maps.Marker({
                        map: gMap,
                        position: new google.maps.LatLng(item.get('latitude'), item.get('longitude')),
                        icon: image,
                        title: item.get('title'),
                        data: item.data
                    });

                    me.markers.push(marker);

                google.maps.event.addListener(marker, 'click', function(e) {
                    me.onMapMarkerTap(this.data);
                });
            });
        }, this);
    },

    /**
     * @method
     * Creates an instance of the goole maps plugin
     *
     * @private
     * @return void
     */
    initMap: function() {
        var me = this,
            map = this.getMap(),
            gMap = map.getMap();

        var geo = Ext.create('Ext.util.Geolocation', {
            autoUpdate: false,
            listeners: {
                locationupdate: function(geo) {
                    me.getMapMarkers(gMap, geo.getLatitude(), geo.getLongitude(), true);
                },
                locationerror: function(geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
                    me.getMapMarkers(gMap, 53.3497316, -6.2603616, true);
                    Ext.Logger.warn('Could not get user location');
                }
            }
        });

        geo.updateLocation();
    },

    /**
     * @method
     * Navigates to the map page when user taps on nav bar
     *
     * @private
     * @return void
     */
    onMapBtnTap: function() {
        this.getMain().animateActiveItem(3, {type: 'slide', direction: 'left'});
    },

    /**
     * @method
     * Sets data on image detail page and navigates to the image details page
     *
     * @private
     * @return void
     */
    onMapMarkerTap: function (a) {
        this.getDetails().setData(a).show();
        // this.getApplication.getController('Details').open();
        // this.getDetails().setData(a);
        // this.getMain().setBackButtonTarget(3);
        // this.getMain().animateActiveItem(2, {type: 'slide', direction: 'left'});
    }
});
