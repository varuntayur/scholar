Ext.define('scholar.store.administration.settings.bloodgroup.Store', {
	extend : 'Ext.data.Store',
	model : 'scholar.model.administration.settings.bloodgroup.BloodgroupSearch',	
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
	pageSize:1
});