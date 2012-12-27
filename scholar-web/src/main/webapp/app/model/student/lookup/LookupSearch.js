Ext.define('scholar.model.student.lookup.LookupSearch', {
	extend: 'Ext.data.Model',
	idProperty:'admissionId',
	fields : [ {
		name : 'admissionId',
		type : 'int'
	},{
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
	} ]	
});