Ext.define('scholar.store.transport.vehicle.Search', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.transport.vehicle.Search',
    proxy: {
		type: 'rest',
		url: 'http://localhost:8080/scholar-rest/rest/vehicle',
		reader: {
			type: 'json',
			root: 'data',
			totalProperty: 'total'
		},
		writer: {
			type: 'json'
		},
		appendId: false
	},	
	pageSize: 1,
	autoSync: true,
	autoLoad: true
});