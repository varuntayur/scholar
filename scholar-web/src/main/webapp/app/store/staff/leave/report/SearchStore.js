Ext.define('scholar.store.staff.leave.report.SearchStore', {
    extend: 'Ext.data.Store',
    model: 'scholar.model.staff.leave.report.SearchModel',
    data : [ 
             [ '001005', 'Rama', 'CS', 'Blore', '9/1 12:00am' ],
			 [ '001006', 'Krishna', 'Science', 'Blore', '9/1 12:00am' ],
			 [ '001007', 'Govinda', 'Maths', 'Blore', '9/1 12:00am' ] 
    	   ],
	autoLoad: true
});