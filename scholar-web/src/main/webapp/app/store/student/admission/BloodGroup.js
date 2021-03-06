Ext.define('scholar.store.student.admission.BloodGroup', {
	extend : 'Ext.data.Store',
	model : 'scholar.model.student.admission.BloodGroup',
//	data : [ {
//		"abbr" : "AL",
//		"bloodGroupName" : "Unknown"
//	}, {
//		"abbr" : "AL",
//		"bloodGroupName" : "A+"
//	}, {
//		"abbr" : "AL",
//		"bloodGroupName" : "A-"
//	}, {
//		"abbr" : "AL",
//		"bloodGroupName" : "B+"
//	}, {
//		"abbr" : "AL",
//		"bloodGroupName" : "B-"
//	}, {
//		"abbr" : "AL",
//		"bloodGroupName" : "O+"
//	}, {
//		"abbr" : "AL",
//		"bloodGroupName" : "O-"
//	}, {
//		"abbr" : "AK",
//		"bloodGroupName" : "AB+"
//	}, {
//		"abbr" : "AZ",
//		"bloodGroupName" : "AB-"
//	} ],
//	autoLoad : true
	autoLoad : true,
	autoSync: true,
	proxy: {
		type: 'rest',
		url: 'http://localhost:8080/scholar-rest/rest/bloodgroup',
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