Ext.define('scholar.model.staff.lookup.SubjectAllocationModel', {
	extend: 'Ext.data.Model',
	fields : [ {
		name : 'batchName',
		type : 'string'
	}, {
		name : 'courseName',
		type : 'string'
	}, {
		name : 'section',
		type : 'string'
	},
	{
		name : 'subject',
		type : 'string'
	},
	{
		name : 'supervisor',
		type : 'bool'
	},
	{
		name : 'startDate',
		type : 'date',
		dateFormat : 'n/j h:ia'
	}, {
		name : 'endDate',
		type : 'date',
		dateFormat : 'n/j h:ia'
	}, {
		name : 'lastChange',
		type : 'date',
		dateFormat : 'n/j h:ia'
	} ]
	
});