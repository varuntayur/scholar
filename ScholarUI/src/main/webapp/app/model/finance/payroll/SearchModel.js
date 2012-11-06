Ext.define('scholar.model.finance.payroll.SearchModel', {
	extend: 'Ext.data.Model',
	fields : [  {
		name : 'userName',
		type : 'string'
	},
	{
		name : 'userRole',
		type : 'string'
	},
	{
		type : 'date',
		dateFormat : 'Y-m-d',
		name : 'dateOfJoining'
	},
	{
		type : 'string',
		name : 'grade'
	},
	{
		type : 'string',
		name : 'experience'
	},
	{
		name : 'lastChange',
		type : 'date',
		dateFormat : 'n/j h:ia'
	} ]
	
});