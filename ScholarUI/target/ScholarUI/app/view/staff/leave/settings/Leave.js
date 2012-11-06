Ext.define('scholar.view.staff.leave.settings.Leave', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.leaveSettings',
	title:'Leave Settings',
	store : 'staff.leave.settings.Store',
	columnLines : true,
	columns : [ {
		text : 'Role Name',
		width : 75,
		sortable : true,
		dataIndex : 'roleName'
	},
	{
		text : 'Number of Sick/Casual Leaves',
		width : 125,
		sortable : true,
		dataIndex : 'numOfSickCasualLeaves'
	},
	{
		text : 'Number of Earned Leaves',
		width : 125,
		sortable : true,
		dataIndex : 'numOfEarnedLeaves'
	},
	{
		xtype : 'datecolumn',
		text : 'Last Updated',
		width : 85,
		flex : 1,
		sortable : true,
		dataIndex : 'lastChange'
	} ]
	
});

