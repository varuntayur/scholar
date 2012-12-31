Ext.define('scholar.store.finance.settings.general.Store', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.finance.settings.general.FinanceSettings',
//	data : [ ['2012-04-01','2013-03-31'] ],
//	autoLoad: true
    autoLoad : true,
	autoSync: true,
	proxy: {
		type: 'rest',
		url: 'http://localhost:8080/scholar-rest/rest/financeSettings',
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