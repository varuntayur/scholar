Ext.define('scholar.store.transport.route.SearchStore', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.transport.route.SearchModel',
    data : [
	        [ '001', 'ka058145', 'South Blore', 'Raju', '9/1 12:00am' ],
			[ '002', 'ka051457', 'North Blore', 'Rama', '9/1 12:00am' ],
			[ '003', 'ka056131 ', 'East blore', 'Krishna', '9/1 12:00am' ], 
			[ '004', 'ka056141 ', 'West blore', 'Nagesh', '9/1 12:00am' ] ,
	        [ '005', 'ka056140 ', 'South East blore', 'Ramesh', '9/1 12:00am' ], 
	        [ '005', 'ka056140 ', 'South West blore', 'Suresha', '9/1 12:00am' ] 
		],
	autoLoad: true
});
