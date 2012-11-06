Ext.define('scholar.model.staff.leave.report.SearchModel', {
	extend: 'Ext.data.Model',
	fields : [ {
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
	} ]
	
});