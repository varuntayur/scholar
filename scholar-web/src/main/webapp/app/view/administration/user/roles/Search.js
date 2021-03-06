Ext.define('scholar.view.administration.user.roles.Search', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.roleSearch',
	id: 'roleSearch',
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
	}, {
        xtype: 'pagingtoolbar',
        store: 'administration.user.roles.SearchStore',   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true
    }  ],
	store : 'administration.user.roles.SearchStore',
	columnLines : true,
	columns : [ {
		text : 'Id',
		dataIndex : 'id',
		hidden: true
	}, {
		text : 'Role Name',
		width : 175,
		flex :1,
		sortable : true,
		dataIndex : 'roleName'
	}, {
		xtype : 'datecolumn',
		text : 'Last Updated',
		width : 85,
		flex : 1,
		sortable : true,
		dataIndex : 'lastChange'
	} ]	
});

