Ext.define('scholar.view.staff.leave.report.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.leaveSearch',
	store : 'staff.leave.report.SearchStore',
	columnLines : true,
	columns : [ {
		text : 'Employee ID',
		flex : 1,
		sortable : false,
		dataIndex : 'employeeId'
	}, {
		text : 'Name',
		width : 75,
		sortable : true,
		dataIndex : 'staffName'
	}, {
		text : 'Department',
		width : 75,
		sortable : true,
		dataIndex : 'department'
	}, {
		xtype : 'datecolumn',
		text : 'Last Updated',
		width : 85,
		sortable : true,
		dataIndex : 'lastChange'
	} ],
	height : 350,
	width : 600,
	viewConfig : {
		stripeRows : true
	}
});

