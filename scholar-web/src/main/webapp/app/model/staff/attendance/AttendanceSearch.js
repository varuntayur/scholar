Ext.define('scholar.model.staff.attendance.AttendanceSearch', {
	extend: 'Ext.data.Model',
	fields : [ {
		name : 'id',
		type : 'int'
	}, {
		name : 'employeeId',
		type : 'string'
	}, {
		name : 'staffName',
		type : 'string'
	}, {
		name : 'department',
		type : 'string'
	},  {
		name : 'lastChange',
		type : 'date',
		dateFormat : 'n/j h:ia'
	} ],
	
});