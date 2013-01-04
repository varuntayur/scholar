Ext.define('scholar.store.administration.settings.category.Store', {
	extend : 'Ext.data.Store',
	model : 'scholar.model.administration.settings.category.CategorySearch',	
	autoLoad : true,
	autoSync: true,
	proxy: {
		type: 'rest',
		url: 'http://localhost:8080/scholar-rest/rest/category',
		reader: {
			type: 'json',
			root: 'data',
			totalProperty: 'total'
		},
		writer: {
			type: 'json'
		},
		appendId: false
	}
});