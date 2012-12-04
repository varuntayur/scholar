Ext.define('scholar.model.student.performance.Model', {
	extend: 'Ext.data.Model',
    fields : [ {
		name : 'admissionNumber',
		type : 'string'
	}, {
		name : 'studentName',
		type : 'string'
	}, {
		name : 'courseName',
		type : 'string'
	}, {
		name : 'batchName',
		type : 'string'
	}, {
		name : 'admissionDate',
		type : 'date',
		dateFormat : 'n/j h:ia'
	}, {
		name : 'lastChange',
		type : 'date',
		dateFormat : 'n/j h:ia'
	} ]
	
});