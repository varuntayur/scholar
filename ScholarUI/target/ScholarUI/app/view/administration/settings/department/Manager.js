Ext.define('scholar.view.administration.settings.department.Manager', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.departmentManager',
	frame : true,
	title:'Department',
	id:'settingsDepartmentSearch',
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [ {
			xtype : 'button',
			iconCls:'x-icon-new',
			text : 'Add',
			action:'addDepartment',
		}, {
			xtype : 'button',
			iconCls:'x-icon-delete',
			text : 'Delete',
			action:'deleteDepartment',
		} ]
	} ],
	store : 'administration.settings.department.SearchStore',
	columnLines : true,
	columns : [  {
		text : 'Department Name',
		width : 75,
		flex:1,
		sortable : true,
		dataIndex : 'departmentName'
	},
	{
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
