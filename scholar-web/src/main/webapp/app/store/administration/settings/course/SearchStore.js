Ext.define('scholar.store.administration.settings.course.SearchStore', {
	extend : 'Ext.data.Store',
	model : 'scholar.model.administration.settings.course.CourseSearch',
	autoLoad : true,
	autoSync: true,
	proxy: {
		type: 'rest',
		url: 'http://localhost:8080/scholar-rest/rest/course',
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