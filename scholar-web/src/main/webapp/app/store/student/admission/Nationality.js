Ext.define('scholar.store.student.admission.Nationality', {
	extend : 'Ext.data.Store',
	model : 'scholar.model.student.admission.Nationality',
//	data : [ {
//		"abbr" : "AL",
//		"nationality" : "Indian"
//	}, {
//		"abbr" : "AK",
//		"nationality" : "Other"
//	} ],
//	autoLoad : true
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