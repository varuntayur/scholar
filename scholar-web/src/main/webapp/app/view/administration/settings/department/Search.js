Ext.define('scholar.view.administration.settings.department.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.departmentSearch',
	frame : false,
	id:'departmentSearch',
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
	}, {
        xtype: 'pagingtoolbar',
        store: 'administration.settings.department.SearchStore',   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true
    }   ],
	store : 'administration.settings.department.SearchStore',
	columnLines : true,
	columns : [  {
		text : 'Id',
		dataIndex : 'id',
		hidden: true
	},{
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
	}
});
