Ext.define('scholar.model.staff.leave.settings.Model', {
	extend: 'Ext.data.Model',
	fields : [ {
		name : 'roleName',
		type : 'string'
	},
	{
		name : 'numOfSickCasualLeaves',
		type : 'string'
	},
	{
		name : 'numOfEarnedLeaves',
		type : 'string'
	},		
	{
		name : 'lastChange',
		type : 'date',
		dateFormat : 'n/j h:ia'
	} ],
	
});