Ext.define('scholar.store.administration.settings.nationality.SearchStore', {
	extend : 'Ext.data.Store',
	model : 'scholar.model.administration.settings.nationality.Search',
	autoLoad : true,
	autoSync: true,
	proxy: {
		type: 'rest',
		url: 'http://localhost:8080/scholar-rest/rest/nationality',
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