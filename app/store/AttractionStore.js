Ext.define('CarSafari.store.AttractionStore', {
    extend: 'Ext.data.Store',

    requires: [
        'CarSafari.model.Attraction'
    ],

    config: {
        storeId: 'attrationStore',
        model: 'CarSafari.model.Attraction',
        data: [
            {
                id: 123,
                latitude: '53.3428864',
                longitude: '-6.2674293',
                title: 'Dublin Castle',
                icon: 'marker',
                location: 'Dublin City Center',
                content: [
                    '<img src="/resources/icons/viking.gif" width="100%"> Dublin Castle was first built in 930 as a Viking fortress, in 1014 a big battle between the Irish High King Brian Bru and the Vikings resulted in an Irish victory and the Vikings lost control of Ireland',
                    'The Normans invaded in 1169 and built a wooden castle in 1170.  The English King John wanted a bigger castle and a Stone Castle was completed in 1230.<br>',
                    '<img src="/resources/icons/castle.png" width="100%">A big fire in 1684 destroyed the castle and it was destroyed. By 1728 the castle you see today emerges, by 1820 the castle becomes a headquarters for the police and army.<br>',
                    'Following the War of Independence in 1921 and now it acts a reception area for government and the headquarters for the Revenue Commissioners<br>'
                ].join('')
            },
            {
                id: 124,
                latitude: '53.3558825',
                longitude: '-6.3298121',
                title: 'Phoenix Park',
                icon: 'marker-jump',
                location: 'Dublin City Center',
                content: [
                    '<img src="/resources/icons/park.png" width="100%">',
                    'The park was opened in 1745 and is one of the largest walled parks in Europe. Located in the park  is Aras an Uachtarain or House of the President is home to the President of Ireland, the ambassador of United States also lives in the park.<br>',
                    'In 1979 one million people attended a open air mass by Pope John Paul II. Hundreds of deer roam around the park every day.  There are many statues and monuments including the giant Wellington Monument.<br>',
                    '<img src="/resources/icons/zoo.png" width="100%">',
                    'Dublin Zoo is home to many animals like Lions, Elephants,giraffes, snakes and monkeys, make sure you visit at 1pm to see the seals have their lunch!!'
                ].join('')
            },
            {
                id: 125,
                latitude: '53.3862303',
                longitude: '-6.06889',
                title: 'Howth',
                icon: 'marker-sit',
                location: 'Dublin Co',
                content: [
                    'Howth is a small but famous fishing village on the northside of Dublin<br>',
                    'The vikings lived here until they were defeated by the Irish in 1014.<br>',
                    '<img src="/resources/icons/pirate.png" width="100%">',
                    'The famous pirate Gráinne O\'Malley kidnapped the son of the Earl of Howth in 1576 when the Earl would not give her a dinner!<br>',
                    'In 1914 the Irish volunteers landed many guns in Howth which were used in the 1916 Rising<br>',
                    '<img src="/resources/icons/mill.png" width="100%">',
                    'Now Howth is a fishing village with a many resturants, pubs, the National transport museum where you can find out about all the buses and trains in Ireland and a lifeboat station. Most days you can get a boat out the the small island called Irelands Eye. '
                ].join('')
            }
        ]
    }
});
