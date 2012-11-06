Ext.define('scholar.view.staff.examination.schedule.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.scheduleSearch',
	id: 'examScheduleSearchGrid',
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [ {
			xtype : 'button',
			iconCls:'x-icon-new',
			text : 'Add',
			action:'add',
		}, {
			xtype : 'button',
			iconCls:'x-icon-delete',
			text : 'Delete',
			action:'delete',
		} ]
	} ],
	store : 'staff.examination.schedule.SearchStore',
	columnLines : true,
	columns : [ {
		text : 'Course Name',
		sortable : false,
		dataIndex : 'courseName'
	}, {
		text : 'Batch Name',
		width : 75,
		sortable : true,
		dataIndex : 'batchName'
	},
	{
		text : 'Subject Name',
		width : 75,
		sortable : true,
		dataIndex : 'subjectName'
	},
	{
		xtype : 'datecolumn',
		text : 'Exam Date',
		flex : 1,
		width : 85,
		sortable : true,
		dataIndex : 'examDate'
	} ]

});

