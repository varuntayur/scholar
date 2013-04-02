Ext.define('scholar.controller.administration.user.roles.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized user.roles.Controller!');
		this.control({
			'#userRoles' : {
				itemdblclick: this.editRoles,
				render:this.loadRoles
			},
			
			'userRoles button[action=add]' : {
            	click: this.addRoles
            },
            'userRoles button[action=delete]' : {
            	click: this.deleteRoles
            }      
		});
	},
	
	loadRoles: function()
	{
		this.getAdministrationUserRolesSearchStoreStore().loadPage(1);
	},
	
	
	deleteRoles: function()
	{
		var store = this.getAdministrationUserRolesSearchStoreStore();
		var selection = Ext.ComponentQuery.query('#userRoles')[0].getView().getSelectionModel().getSelection()[0];
        if (selection) {
            store.remove(selection);
        }
        store.loadPage(1);
	},
	
	addRoles: function()
	{
		var admForm = Ext.widget('roleDetail',{ store: this.getAdministrationUserRolesSearchStoreStore() });
		
		Ext.create('Ext.Window', {
			xtype : 'window',
			closable : true,
			minimizable : false,
			title : 'Role Details',
			layout:'fit',
			autoScroll : true,
			autoRender: true,
			closeAction : 'hide',
			constrain : true,
			items : [ admForm ]
		}).show();
	},
	
	editRoles: function(grid, record)
	{
		 console.log('Double clicked on ' + record.get('roleName'));
         
	        var admForm = Ext.widget('roleDetail',{ store: this.getAdministrationUserRolesSearchStoreStore() });
	        admForm.loadRecord(record);
	        
	        Ext.create('Ext.Window', {
				xtype : 'window',
				closable : true,
				minimizable : false,
				title : 'User Details',
				layout:'fit',			
				autoScroll : true,
				autoRender: true,
				closeAction : 'hide',
				constrain : true,
				items : [  admForm ]
			}).show();
	},

	views : [ 'administration.user.roles.Manager',
	          'administration.user.roles.Detail' ],

	stores : [ 'administration.user.roles.SearchStore','administration.user.roles.PermissionStore' ],
	
	models : [ 'administration.user.roles.RolesSearch','administration.user.roles.PermissionSearch' ]

});