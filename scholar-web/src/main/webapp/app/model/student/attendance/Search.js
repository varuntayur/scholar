Ext.define('scholar.model.student.attendance.Search', {
	extend: 'Ext.data.Model',
	fields : [ {
		name : 'attendanceId',
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
	} ],
	idProperty:'attendanceId'
});