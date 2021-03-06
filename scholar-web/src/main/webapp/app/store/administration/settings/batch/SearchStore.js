Ext.define('scholar.store.administration.settings.batch.SearchStore', {
	extend : 'Ext.data.Store',
	model : 'scholar.model.administration.settings.batch.BatchSearch',
	autoLoad : true,
	autoSync: true,
	proxy: {
		type: 'rest',
		url: 'http://localhost:8080/scholar-rest/rest/batch',
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