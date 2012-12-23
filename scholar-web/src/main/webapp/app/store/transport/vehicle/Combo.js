Ext.define('scholar.store.transport.vehicle.Combo', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.transport.vehicle.Search',
    proxy: {
		type: 'rest',
		url: 'http://localhost:8080/scholar-rest/rest/vehicle',
		reader: {
			type: 'json',
			root: 'data',
		},
		writer: {
			type: 'json'
		}
	},	
	autoSync: true,
	autoLoad: true
});