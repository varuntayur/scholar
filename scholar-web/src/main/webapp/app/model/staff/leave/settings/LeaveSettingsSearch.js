Ext.define('scholar.model.staff.leave.settings.LeaveSettingsSearch', {
	extend: 'Ext.data.Model',
	fields : [  {
		name : 'id',
		type : 'int'
	},{
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