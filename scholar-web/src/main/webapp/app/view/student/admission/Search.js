Ext.define('scholar.view.student.admission.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.admissionSearch',
	store : 'student.admission.Search',
	id: 'admissionsGrid',
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [ {
			xtype : 'button',
			iconCls:'x-icon-new',
			text : 'Add',
			action:'newAdmission',
		},
		{
			xtype : 'button',
			iconCls:'x-icon-delete',
			text : 'Delete',
			action:'deleteAdmission',
		}
		]
	}, {
        xtype: 'pagingtoolbar',
        store: 'transport.route.Search',   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true
    } ],
	columnLines : true,
	columns : [ {
		text : 'Admission Number',
		width : 125,
		sortable : true,
		dataIndex : 'admissionNumber'
	}, {
		text : 'Student Name',
		width : 125,
		sortable : true,
		dataIndex : 'studentName'
	},
	{
		text : 'Sex',
		width : 50,
		sortable : true,
		dataIndex : 'sex'
	},
	{
		text : 'Course Name',
		width : 125,
		sortable : true,
		dataIndex : 'courseName'
	},
	{
		text : 'Section',
		width : 125,
		sortable : true,
		dataIndex : 'section'
	},
	{
		text : 'Batch Name',
		width : 125,
		sortable : true,
		dataIndex : 'batchName'
	},
	{
		xtype : 'datecolumn',
		text : 'Date Of Birth',
		dataIndex : 'dateOfBirth',
		sortable : true
	},
	{
		text : 'Blood Group',
		dataIndex : 'bloodGroupName',
		sortable : true
	},
	{
		text : 'Nationality',
		dataIndex : 'nationality',
		sortable : true
	},
	{
		text : 'Category',
		dataIndex : 'categoryName',
		sortable : true
	},
	{
		xtype : 'datecolumn',
		text : 'Admission Date',
		width : 85,
		sortable : true,
		dataIndex : 'admissionDate'
	}, {
		xtype : 'datecolumn',
		text : 'Last Updated',
		width : 85,
		flex : 1,
		sortable : true,
		dataIndex : 'lastChange'
	} ]
});

