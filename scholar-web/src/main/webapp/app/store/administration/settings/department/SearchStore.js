Ext.define('scholar.store.administration.settings.department.SearchStore', {
	extend : 'Ext.data.Store',
	model : 'scholar.model.administration.settings.department.DepartmentSearch',	
//	autoLoad : true,
//	data : [
//			[ 'Mathematics', '9/1 12:00am' ],
//			[ 'Science', '8/1 12:00am' ],
//			[ 'Social', '8/1 12:00am' ] 
//		]
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