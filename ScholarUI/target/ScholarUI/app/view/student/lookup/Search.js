Ext.define('scholar.view.student.lookup.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.studentSearch',
	store : 'student.lookup.SearchStore',
	id:'studentLookup',
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [{
					xtype : 'button',
					iconCls:'x-icon-attendance',
					text : 'View Attendance',
					action:'viewAttendance',
				},
				{
					xtype : 'button',
					iconCls:'x-icon-grades',
					text : 'View Grades',
					action:'viewGrades',
				}]
	} ],
	columnLines : true,
	columns : [ {
		text : 'Admission Number',		
		sortable : false,
		dataIndex : 'admissionNumber'
	}, {
		text : 'Name',
		width : 75,
		sortable : true,
		dataIndex : 'studentName'
	}, {
		text : 'Class',
		width : 75,
		sortable : true,
		dataIndex : 'standard'
	}, {
		text : 'Address',
		width : 75,
		sortable : true,
		dataIndex : 'address'
	}, {
		xtype : 'datecolumn',
		text : 'Last Updated',
		width : 85,
		flex:1,
		sortable : true,
		dataIndex : 'lastChange'
	} ],
	height : 350,
	width : 600,
	viewConfig : {
		stripeRows : true
	}
});

