Ext.define('scholar.store.staff.event.EventStore', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.staff.event.EventSearch',
//    data : [
//	        [ 'Independance Day', 'Program schedule: 9.am',  '9/15 12:00am','9/15 12:00am' ],
//			[ 'Krishna Janmashthami Celebrations', 'Krishna costume event at Auditorium starts 3pm', '10/1 12:00am','10/1 12:00am' ]				 
//	       ],
//	autoLoad: true
    autoLoad : true,
	autoSync: true,
	proxy: {
		type: 'rest',
		url: 'http://localhost:8080/scholar-rest/rest/events',
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