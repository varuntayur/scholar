Ext.define('scholar.view.administration.user.roles.Permissions', {
	extend : 'Ext.ux.LiveSearchGridPanel',
	alias: 'widget.permissionsGrid',
	id:'permissionsGrid',
	requires:['Ext.ux.CheckColumn'],
	title:'Permissions',
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		items : [ {
			xtype : 'button',
			iconCls:'x-icon-new',
			text : 'Select All',
			scope: this,
			handler: function(){
				var permissionsData = Ext.getCmp('userRolesPermissions').getStore().data;
				var lstPermissions = [];
				
				for(var i = 0; i< permissionsData.getCount(); i++)
				{
					var dataRec = permissionsData.getAt(i);
					dataRec.set({
						 'read' : true,
						 'write' : true,
						 'delete':  true 
					});
				}
			}
		}, {
			xtype : 'button',
			iconCls:'x-icon-delete',
			text : 'De-select All',
			id:'userRolesPermissionsDeselectAll',
			scope: this,
			handler: function(){
				var permissionsData = Ext.getCmp('userRolesPermissions').getStore().data;
				var lstPermissions = [];
				
				for(var i = 0; i< permissionsData.getCount(); i++)
				{
					var dataRec = permissionsData.getAt(i);
					dataRec.set({
						'read' : false,
						 'write' : false,
						 'delete':  false 		
					});
				}
			}
		} ]
	} ],
	autoScroll:true,
	store : 'administration.user.roles.PermissionStore',
	columnLines : true,
	height : 250,
	width: 500,	
	columns : [{
					text : 'Id',
					dataIndex : 'id',
					hidden: true
				}, {
					text : 'Form Name',
					width : 75,
					dataIndex : 'formName'
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

