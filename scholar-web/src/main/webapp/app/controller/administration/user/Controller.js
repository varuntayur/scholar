Ext.define('scholar.controller.administration.user.Controller', {
	extend : 'Ext.app.Controller',

	init : function() {
		console.log('Initialized user.roles.Controller!');
		this.control({
			'#userSearch' : {
				itemdblclick: this.editUser,
				render: this.loadUsers
			},
			
			'userSearch button[action=add]' : {
            	click: this.addUser
            },
            'userSearch button[action=delete]' : {
            	click: this.deleteUser
            }      
		});
	},
	
	loadUsers: function(){
		this.getAdministrationUserSearchStoreStore().loadPage(1);
	},
	
	deleteUser: function()
	{
		var store = this.getAdministrationUserSearchStoreStore();
		var selection = Ext.ComponentQuery.query('#userSearch')[0].getView().getSelectionModel().getSelection()[0];
        if (selection) {
            store.remove(selection);
        }
        store.loadPage(1);
	},
	
	addUser: function()
	{
		var admForm = Ext.widget('userDetail',{ store: this.getAdministrationUserSearchStoreStore() });
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
			items : [ admForm ]
		}).show();
	},
	
	editUser: function(grid, record)
	{
	        var admForm = Ext.widget('userDetail');
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

	views : [ 'administration.user.Manager',
	          'administration.user.users.Detail',
	          'administration.user.users.Search'],

	stores : [ 'administration.user.SearchStore' ],
	
	models : [ 'administration.user.UserSearch' ]

});