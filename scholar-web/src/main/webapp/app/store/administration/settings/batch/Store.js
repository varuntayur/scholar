Ext.define('scholar.store.administration.settings.batch.Store', {
	extend : 'Ext.data.Store',
	model : 'scholar.model.administration.settings.batch.Combo',
//	data : [
//                   ["AL", "A"],
//                   ["AK", "C"],
//                   ["AZ", "CS 1"],
//                   ["AZ", "2012"]
//           ],
//	autoLoad : true
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