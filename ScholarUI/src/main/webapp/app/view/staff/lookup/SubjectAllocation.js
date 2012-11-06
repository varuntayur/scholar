Ext.define('scholar.view.staff.lookup.SubjectAllocation', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.subjectAllocation',
	frame : true,
	id:'staffSubjectAllocation',
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [ {
			xtype : 'button',
			iconCls:'x-icon-new',
			text : 'Add',
			action:'addSubjectAllocation',
		}, {
			xtype : 'button',
			iconCls:'x-icon-delete',
			text : 'Delete',
			action:'deleteSubjectAllocation',
		} ]
	} ],
	store : 'staff.lookup.SubjectAllocationStore',
	columnLines : true,
	columns : [  {
		text : 'Batch Name',
		width : 75,
		flex:1,
		sortable : true,
		dataIndex : 'batchName'
	}, {
		text : 'Course Name',
		width : 75,
		flex:1,
		sortable : true,
		dataIndex : 'courseName'
	}, {
		text : 'Section',
		width : 75,
		flex:1,
		sortable : true,
		dataIndex : 'section'
	},
	{
		text : 'Subject',
		width : 75,
		flex:1,
		sortable : true,
		dataIndex : 'subject'
	},
	{
		text : 'Supervisor',
		width : 75,
		flex:1,
		xtype: 'checkcolumn',
		sortable : true,
		dataIndex : 'supervisor'
	},
	{
		xtype : 'datecolumn',
		text : 'Start Date',
		width : 85,
		flex:1,
		sortable : true,
		dataIndex : 'startDate'
	}, {
		xtype : 'datecolumn',
		text : 'End Date',
		width : 85,
		flex:1,
		sortable : true,
		dataIndex : 'endDate'
	}, {
		xtype : 'datecolumn',
		text : 'Last Updated',
		width : 85,
		flex : 1,
		sortable : true,
		dataIndex : 'lastChange'
	}  ],
	height : 250,
	width: 500,
	viewConfig : {
		stripeRows : true
	},
});
