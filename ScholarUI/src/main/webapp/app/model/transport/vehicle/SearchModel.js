Ext.define('scholar.model.transport.vehicle.SearchModel', {
	extend: 'Ext.data.Model',
	fields : [ {
		name : 'vehicleNumber',
		type : 'string'
	}, {
		name : 'vehicleDetails',
		type : 'string'
	}, {
		name : 'lastUpdatedDate',
		type : 'date',
		dateFormat : 'n/j h:ia'
	} ],
	
});