Ext.define('scholar.store.staff.event.EventStore', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.staff.event.EventModel',
    data : [
	        [ 'Independance Day', 'Program schedule: 9.am',  '9/15 12:00am','9/15 12:00am' ],
			[ 'Krishna Janmashthami Celebrations', 'Krishna costume event at Auditorium starts 3pm', '10/1 12:00am','10/1 12:00am' ]				 
	       ],
	autoLoad: true
});