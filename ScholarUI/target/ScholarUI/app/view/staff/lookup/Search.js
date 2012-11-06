Ext.define('scholar.view.staff.lookup.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.staffSearch',
	store :'staff.lookup.SearchStore',
	id:'staffLookup',
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [
		         {
			       	 xtype : 'button',
			    	 iconCls:'x-icon-new',
			    	 text : 'Add',
			    	 action:'addStaff',
			     },	
			     {
			       	 xtype : 'button',
			    	 iconCls:'x-icon-apply-retire',
			    	 text : 'Retire',
			    	 action:'retireStaff',
			     },	
		         {
					xtype : 'button',
					iconCls:'x-icon-attendance',
					text : 'View Attendance',
					action:'viewStaffAttendance',
				},
				{
					xtype : 'button',
					iconCls:'x-icon-schedule',
					text : 'View Time-Table',
					action:'viewTimeTable',
				}]
	} ],
	columnLines : true,
	columns : [ {
		text : 'Employee ID',		
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
		text : 'Address',
		width : 75,
		flex : 1,
		sortable : true,
		dataIndex : 'address'
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

