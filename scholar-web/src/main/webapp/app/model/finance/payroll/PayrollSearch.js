Ext.define('scholar.model.finance.payroll.PayrollSearch', {
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
		name : 'dateOfJoining',
		type : 'date',
		dateFormat : 'Y-m-d'
	},
	{
		name : 'grade',
		type : 'string'
	},
	{
		name : 'experience',
		type : 'string',
	},
	{
		name : 'lastChange',
		type : 'date',
		dateFormat : 'n/j h:ia'
	} ]
	
});