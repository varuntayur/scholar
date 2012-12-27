Ext.define('scholar.store.administration.settings.general.Store', {
	extend : 'Ext.data.Store',
	model : 'scholar.model.administration.settings.general.SettingsSearch',	
	autoLoad : true,
	autoSync: true,
	proxy: {
		type: 'rest',
		url: 'http://localhost:8080/scholar-rest/rest/institutionDetails',
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