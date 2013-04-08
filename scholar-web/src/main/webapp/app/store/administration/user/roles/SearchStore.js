Ext.define('scholar.store.administration.user.roles.SearchStore', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.administration.user.roles.RolesSearch',
	autoLoad : true,
	autoSync: true,
	proxy: {
		type: 'rest',
		url: 'http://localhost:8080/scholar-rest/rest/userRoles',
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