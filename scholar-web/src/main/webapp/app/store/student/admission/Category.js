Ext.define('scholar.store.student.admission.Category', {
	extend : 'Ext.data.Store',
	model : 'scholar.model.student.admission.Category',
//	data : [ {
//		"abbr" : "AL",
//		"categoryName" : "General"
//	}, {
//		"abbr" : "AL",
//		"categoryName" : "OBC"
//	}, {
//		"abbr" : "AL",
//		"categoryName" : "SC"
//	}, {
//		"abbr" : "AL",
//		"categoryName" : "ST"
//	} ],
//	autoLoad : true
	autoLoad : true,
	autoSync: true,
	proxy: {
		type: 'rest',
		url: 'http://localhost:8080/scholar-rest/rest/admissionCategory',
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