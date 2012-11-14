Ext.define('scholar.model.transport.vehicle.Search', {
	extend: 'Ext.data.Model',
	fields : [ {
		name: 'vehicleId',
		type: 'int'
	},{
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