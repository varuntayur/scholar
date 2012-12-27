Ext.define('scholar.store.transport.route.Search', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.transport.route.RouteSearch',
    proxy: {
		type: 'rest',
		url: 'http://localhost:8080/scholar-rest/rest/route',
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
	pageSize: 1,
	autoSync: true,
	autoLoad: true
});
