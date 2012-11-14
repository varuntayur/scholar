Ext.define('scholar.store.transport.vehicle.SearchStore', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.transport.vehicle.SearchModel',
    data : [
	        [ 'ka058145', 'Canter 48 seater',  '9/1 12:00am' ],
			[ 'ka051457', 'Swaraj Mazda 48 seater', '9/1 12:00am' ],
			[ 'ka056131', 'Force Motors 24 seater', '9/1 12:00am' ],
	        [ 'ka056130', 'Force Motors 24 seater', '9/1 12:00am' ],
	        [ 'ka056140', 'Force Motors 24 seater', '9/1 12:00am' ],
	        [ 'ka056141', 'Force Motors 24 seater', '9/1 12:00am' ]
	       ],
	autoLoad: true
});