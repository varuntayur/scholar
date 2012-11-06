Ext.define('scholar.view.administration.user.roles.Permissions', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.permissionsGrid',
	requires:['Ext.ux.CheckColumn'],
	id:'userPermissions',
	title:'Permissions',
	store : 'administration.user.roles.PermissionStore',
	columnLines : true,
	columns : [ {
					text : 'Form Name',
					width : 75,
					dataIndex : 'roleName'
				},
				{
		              xtype: 'checkcolumn',
		              header: 'Read',
		              dataIndex: 'read',
		              width: 55,
		          },
		          {
		              xtype: 'checkcolumn',
		              header: 'Write',
		              dataIndex: 'write',
		              width: 55
		          },
		          {
		              xtype: 'checkcolumn',
		              header: 'Delete',
		              dataIndex: 'delete',
		              width: 55
		          },
				  {
						xtype : 'datecolumn',
						text : 'Last Updated',
						width : 85,
						flex : 1,
						dataIndex : 'lastChange'
					} ],	
	plugins:Ext.create('Ext.grid.plugin.CellEditing', {
        clicksToEdit: 1
    })
});

