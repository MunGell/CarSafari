Ext.define('CarSafari.model.Attraction', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'id',
                type: 'auto'
            },
            {
                name: 'latitude',
                type: 'auto'
            },
            {
                name: 'longitude',
                type: 'auto'
            },
            {
                name: 'title',
                type: 'auto'
            },
            {
                name: 'icon',
                type: 'auto',
                convert: function(value) {
                    return '/resources/icons/'+ value +'.png';
                }
            },
            {
                name: 'location',
                type: 'auto'
            },
            {
                name: 'content',
                type: 'auto'
            }
        ]
    }
});
