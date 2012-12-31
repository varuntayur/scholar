Ext.define('scholar.model.staff.leave.report.LeaveReportSearch', {
	extend: 'Ext.data.Model',
	fields : [  {
		name : 'id',
		type : 'int'
	},{
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