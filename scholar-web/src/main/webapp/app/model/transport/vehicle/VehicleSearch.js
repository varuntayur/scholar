Ext.define('scholar.model.transport.vehicle.VehicleSearch', {
	extend: 'Ext.data.Model',
	idProperty:'vehicleId',
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
		dateFormat : 'F D Y'
	} ]
});