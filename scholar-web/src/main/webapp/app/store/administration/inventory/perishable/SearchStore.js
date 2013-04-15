Ext.define('scholar.store.administration.inventory.perishable.SearchStore', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.administration.inventory.perishable.PerishableSearch',
    autoLoad : true,
	autoSync: true,
	proxy: {
		type: 'rest',
		url: 'http://localhost:8080/scholar-rest/rest/perishables',
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
	pageSize: 1
});