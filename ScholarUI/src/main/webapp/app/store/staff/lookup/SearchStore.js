Ext.define('scholar.store.staff.lookup.SearchStore', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.staff.lookup.SearchModel',
    data : [
	        [ '001005', 'Ram', 'CS', 'Blore', '9/1 12:00am' ],
			[ '001006', 'Murali', 'Science', 'Blore', '9/1 12:00am' ],
			[ '001007', 'Deepak', 'Mathematics', 'Blore', '9/1 12:00am' ],
	        [ '001007', 'Krishna', 'Mathematics', 'Blore', '9/1 12:00am' ],
	        [ '001007', 'Guru', 'Science', 'Blore', '9/1 12:00am' ],
	        [ '001007', 'Uday', 'Civics', 'Blore', '9/1 12:00am' ],
	        
	        [ '001007', 'Raju', 'Transport', 'Blore', '9/1 12:00am' ],
	        [ '001007', 'Rama', 'Transport', 'Blore', '9/1 12:00am' ],
	        [ '001007', 'Krishna', 'Transport', 'Blore', '9/1 12:00am' ],
	        [ '001007', 'Nagesh', 'Transport', 'Blore', '9/1 12:00am' ],
	        [ '001007', 'Ramesh', 'Transport', 'Blore', '9/1 12:00am' ],
	        [ '001007', 'Suresha', 'Transport', 'Blore', '9/1 12:00am' ],
	      ],
	autoLoad: true
});