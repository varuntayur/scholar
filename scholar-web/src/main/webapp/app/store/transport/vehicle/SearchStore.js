Ext.define('scholar.store.transport.vehicle.SearchStore', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.transport.vehicle.SearchModel',
//    data : [
//	        [ 'ka058145', 'Canter 48 seater',  '9/1 12:00am' ],
//			[ 'ka051457', 'Swaraj Mazda 48 seater', '9/1 12:00am' ],
//			[ 'ka056131', 'Force Motors 24 seater', '9/1 12:00am' ],
//	        [ 'ka056130', 'Force Motors 24 seater', '9/1 12:00am' ],
//	        [ 'ka056140', 'Force Motors 24 seater', '9/1 12:00am' ],
//	        [ 'ka056141', 'Force Motors 24 seater', '9/1 12:00am' ]
//	       ],
//    data: [{"vehicleNumber":"ka05","vehicleDetails":"Test","lastUpdatedDate":"2009-9-02"}],
    proxy: {
		type: 'rest',
		url: 'http://localhost:8080/scholar-rest/rest/vehicle',
		reader: {
			type: 'json',
			root: 'data'
		},
		writer: {
			type: 'json'
		}
	},
	autoSync: true,
	autoLoad: true
});