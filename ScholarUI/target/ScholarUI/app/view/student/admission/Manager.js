Ext.define('scholar.view.student.admission.Manager', {
	extend : 'Ext.form.Panel',
	requires : ['scholar.view.student.admission.NewAdmissionForm' ],
	alias : 'widget.admissionManager',
	id:'studentAdmission',
	frame : true,
	bodyPadding : 5,
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [ {
			xtype : 'button',
			iconCls:'x-icon-new',
			text : 'Add',
			action:'newAdmission',
		}, {
			xtype : 'button',
			iconCls:'x-icon-delete',
			text : 'Delete',
			action:'deleteAdmission',
		} ]
	} ],
	layout : {
		type : 'border',
		padding : 5
	},
	defaults : {
		split : true
	},
	fieldDefaults : {
		labelAlign : 'left',
		msgTarget : 'side'
	},
	
	title : 'Admissions',
	items : [ {
		xtype : 'livesearchgridpanel',
		id: 'admissionsGrid',
		region : 'center',
		store : 'student.admission.SearchStore',
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
//		dockedItems : [ {
//			xtype : 'toolbar',
//			dock : 'top',
//			items : [ {
//				xtype : 'button',
//				text : 'New',
//				iconCls:'x-icon-new',
//				listeners : {
//					click : function() {
//						Ext.create('Ext.Window', {
//							xtype : 'window',
//							closable : true,
//							minimizable : false,
//							title : 'New Admission: Student Details',
//							layout:'fit',
//							minHeight: 400,
//							minWidth: 400,
//							autoScroll : true,
//							autoRender: true,
//							closeAction : 'hide',
//							constrain : true,
//							items : [ {
//								xtype : 'newAdmissionForm'
//							} ]
//						}).show();
//					}
//				}
//			}, {
//				xtype : 'button',
//				text : 'Delete',
//				iconCls:'x-icon-delete',
//			} ]
//		} ]
	} ]
});
