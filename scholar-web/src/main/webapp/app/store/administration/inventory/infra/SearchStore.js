Ext.define('scholar.store.administration.inventory.infra.SearchStore', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.administration.inventory.infra.InfraSearch',
//    data : [
//			[ 'Chairs', 'Nilkamal','100'	,'9/1 12:00am' ],
//			[ 'Chairs', 'National','150'	,'9/1 12:00am' ],
//			[ 'Table', 'National','250',	'9/1 12:00am' ],
//			[ 'Benches', 'Scholar','1002'	,'9/1 12:00am' ] 
//		   ],
//	autoLoad: true
    autoLoad : true,
	autoSync: true,
	proxy: {
		type: 'rest',
		url: 'http://localhost:8080/scholar-rest/rest/infra',
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