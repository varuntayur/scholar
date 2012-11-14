Ext.define('scholar.view.administration.user.roles.Role', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.roleGrid',
	id:'userRoles',
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
	store : 'administration.user.roles.SearchStore',
	columnLines : true,
	columns : [ {
		text : 'Role Name',
		width : 75,
		sortable : true,
		dataIndex : 'roleName'
	}, {
		xtype : 'datecolumn',
		text : 'Last Updated',
		width : 85,
		flex : 1,
		sortable : true,
		dataIndex : 'lastChange'
	} ],
});

