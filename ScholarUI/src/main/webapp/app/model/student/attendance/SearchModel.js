Ext.define('scholar.model.student.attendance.SearchModel', {
	extend: 'Ext.data.Model',
	fields : [ {
		name : 'admissionNumber',
		type : 'string'
	}, {
		name : 'studentName',
		type : 'string'
	}, {
		name : 'standard',
		type : 'string'
	}, {
		name : 'address',
		type : 'string'
	}, {
		name : 'lastChange',
		type : 'date',
		dateFormat : 'n/j h:ia'
	} ],
	
});