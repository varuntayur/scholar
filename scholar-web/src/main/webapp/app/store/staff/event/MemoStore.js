Ext.define('scholar.store.staff.event.MemoStore', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.staff.event.MemoSearch',
//    data : [
//	        [ 'Independance Day', 'Program schedule: 9.am',  '9/1 12:00am' ],
//			[ 'Krishna Janmashthami Celebrations', 'Krishna costume event at Auditorium starts 3pm', '9/1 12:00am' ]				 
//	       ],
//	autoLoad: true
    autoLoad : true,
	autoSync: true,
	proxy: {
		type: 'rest',
		url: 'http://localhost:8080/scholar-rest/rest/memo',
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