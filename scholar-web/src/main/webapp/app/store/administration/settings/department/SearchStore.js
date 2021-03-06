Ext.define('scholar.store.administration.settings.department.SearchStore', {
	extend : 'Ext.data.Store',
	model : 'scholar.model.administration.settings.department.DepartmentSearch',	
	autoLoad : true,
	autoSync: true,
	proxy: {
		type: 'rest',
		url: 'http://localhost:8080/scholar-rest/rest/department',
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